import {onMounted, onUnmounted, ref} from "vue";

export function useIddleTime() {
    const seconds = ref(0);
    const totalIddleTime = ref(0);

    setInterval(() => seconds.value++, 1000);

    const mouseMove = (event: MouseEvent) => {
        totalIddleTime.value += seconds.value;
        seconds.value = 0;
    }

    onMounted(() => window.addEventListener('click', mouseMove));
    onUnmounted(() => window.removeEventListener('click', mouseMove));

    return {
        seconds,
        totalIddleTime,
    }
}