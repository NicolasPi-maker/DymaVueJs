import {ref} from "vue";

interface User {
    name: string,
}
export function useFetchUser() {
    const users = ref<User[] | null>([]);
    const isLoading = ref(true);
    const errors = ref<any>(null);

    (async () => {
        try {
            users.value = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
        } catch (err) {
            errors.value = err;
        } finally {
            isLoading.value = false;
        }
    })();

    return {
        users,
        isLoading,
        errors,
    }
}