<script>
import {defineComponent} from 'vue';
import SimpleTagsForVue from '@/simple-tags-for-vue.vue';

export default defineComponent({
    name: 'ServeDev',
    components: {
        SimpleTagsForVue,
    },

    data()
    {
        return {
            tags: ['Kawasaki', 'Ducati'],
            existing_tags: ['Kawasaki', 'Ducati', 'BMW', 'Yamaha', 'Honda', 'Suzuki'],
        };
    }
});
</script>

<template>
    <div id="app">
        <simple-tags-for-vue v-model="tags" :existing="existing_tags" :tailwind="false" />
    </div>
</template>
