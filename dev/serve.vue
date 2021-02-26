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
            unused_tags: ['BMW', 'Honda'],
        };
    },

    methods: {
        permanentlyDeleteTag(tag)
        {
            console.log(`deleting ${tag}...`);
        }
    }
});
</script>

<template>
    <div id="app">
        <simple-tags-for-vue v-model="tags"
                             :existing="existing_tags"
                             :unused="unused_tags"
                             :tailwind="false"
                             @destroy="permanentlyDeleteTag"
        ></simple-tags-for-vue>
    </div>
</template>
