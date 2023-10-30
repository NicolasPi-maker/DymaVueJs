<template>
  <div class="container">
    <div class="p-20">
      <h3 class="mb-20">Formulaires</h3>
      <form method="post" @submit="mySubmit">
        <input ref="name" class="mr-10" v-model="nameValue" placeholder="Name" type="text">
        <input class="mr-10" v-model="emailValue" placeholder="Email" type="email">
        <button type="submit" class="btn btn-primary">Valider</button>
      </form>
    </div>
      <Suspense>
        <div class="p-20">
          <h3>Liste des utilisateurs</h3>
          <ul>
            <li @click="selectedUser(user)" class="mb-10 d-flex flex-row" v-for="user in state.users" :key="user._id">
              <span class="mr-10 flex-fill">{{ user.name }} - {{ user.email }}</span>
              <button class="btn" @click.stop="removeUser(user._id)" type="button">Supprimer</button>
            </li>
          </ul>
        </div>
        <template #fallback>
          <h1>LOADING ...</h1>
        </template>
      </Suspense>
  </div>
</template>

<script setup lang="ts">
import {useField, useForm} from "vee-validate";
import {reactive, ref, watch} from "vue";
interface User {
  _id?: number;
  name: string;
  email: string;
  createdAt?: string;
}

const state = reactive<{
  users: User[],
  selectedUser: null | User
}>({
  users: [],
  selectedUser: null
});

const name = ref<HTMLInputElement | null>(null);

const { handleSubmit, resetForm } = useForm();
const mySubmit = handleSubmit(async (values) => {
  try {
    if(state.selectedUser) {
      const response = await fetch(`https://restapi.fr/api/vueusers/${state.selectedUser._id}`, {
        method: 'PATCH',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const user = await response.json();
      state.users = state.users.map(u => u._id === user._id ? user : u)
      state.selectedUser = null;
    } else {
      const response = await fetch('https://restapi.fr/api/vueusers', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const user = await response.json();
      state.users.push(user);
    }
  } catch (error) {
    console.log(error);
  }
  resetForm();
  name.value?.focus();
});

const { value: nameValue, setValue: nameSetValue } = useField('name');
const { value: emailValue, setValue: emailSetValue } = useField('email');

// Methode GET, Fetch all users from API
const fetchUsers = async () => {
  try {
    const response = await fetch('https://restapi.fr/api/vueusers');
    const users : User | User[] = await response.json();
    if(users) {
      if(Array.isArray(users)) {
        state.users = users;
      } else {
        state.users.push(users);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

const removeUser = async(id?: number) => {
  try {
    if (id) {
      await fetch(`https://restapi.fr/api/vueusers/${id}`, {
        method: 'DELETE'
      });
      state.users = state.users.filter((user) => user._id !== id);
    }
  } catch (error) {
    console.log(error);
  }
}

const selectedUser = (user: User) => {
  state.selectedUser = user;
}

watch(() => state.selectedUser,(user: User | null) => {
  if(user) {
    nameSetValue(user.name);
    emailSetValue(user.email);
  } else {
    nameSetValue('');
    emailSetValue('');
  }
})

fetchUsers();

</script>

<style lang="scss">
@import "@/assets/base.css";
</style>