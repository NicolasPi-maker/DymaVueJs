import type {Author} from "@/interfaces";
import type {InjectionKey} from "vue";
export const authorKey = Symbol('author') as InjectionKey<{
    author : Author,
    updateBirthday: (updatedBirthday: string) => string,
}>;