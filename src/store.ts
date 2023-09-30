import {ref} from "vue";


export let countClicks = ref(0);
export let historia = ref<any[]>([]);

export function incremenCountClicks() {
    countClicks.value++;
}