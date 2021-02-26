<template>
    <div>
        <div :class="tailwind ? 'flex flex-wrap' : null">
            <div v-for="tag in tags"
                 :class="tailwind ? 'bg-blue-300 rounded-2xl text-white mr-2 mb-2 flex items-center pl-2 pr-1' : null"
            >
                <span>{{ tag }}</span>
                &nbsp; &nbsp;
                <span @click="removeTag(tag)" style="cursor:pointer">ⓧ</span>
            </div>
        </div>

        <div>
            <input type="text" v-model="input_text" @keydown.enter.prevent="addTag">

            <input type="hidden" name="tags[]" v-for="tag in tags" :value="tag">
        </div>

        <div :class="tailwind ? 'mt-4 flex flex-wrap' : null">
            <div v-for="tag in existing_without_selected"
                 :class="tailwind ? 'existing-tags bg-blue-200 rounded-2xl text-white mr-2 mb-2 flex items-center px-2' : null"
                 style="cursor:pointer"
            >
                <span @click="addTag">{{ tag }}</span>

                <span v-if="unused.includes(tag)" @click="destroy(tag, $event)" style="color:#ffeeee">ⓧ</span>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'tags_input',

    props: {
        modelValue: {
            type: Array,
            default: []
        },

        existing: {
            type: Array,
            default: []
        },

        unused: {
            type: Array,
            default: []
        },

        tailwind: {
            type: Boolean,
            default: true
        }
    },

    emits: ['update:modelValue', 'destroy'],

    data()
    {
        return {
            tags: this.modelValue,
            existing_tags: this.existing,
            input_text: ''
        }
    },

    methods: {
        addTag(event)
        {
            var new_tag = event.target.value ? event.target.value : event.target.innerText;

            if (!new_tag) return;
            if (this.tags.find(tag => tag === new_tag)) return;

            this.tags.push(new_tag);
            this.$emit('update:modelValue', this.tags);

            this.input_text = ''; // clear input
        },

        removeTag(tag)
        {
            let index = this.tags.findIndex(t => t === tag);
            this.tags.splice(index, 1);
            this.$emit('update:modelValue', this.tags);
        },

        destroy(tag, event)
        {
            if (event.target.style.filter === 'brightness(75%)') {
                this.$emit('destroy', tag);

                let index = this.existing_tags.findIndex(t => t === tag);
                this.existing_tags.splice(index, 1);

                return;
            }

            event.target.style.filter = 'brightness(75%)'
        }
    },

    computed: {
        existing_without_selected()
        {
            var without_selected = this.existing_tags.filter(tag => !this.tags.includes(tag));

            if (!this.input_text) return without_selected;

            return without_selected.filter(tag => tag.includes(this.input_text));
        }
    }
};
</script>
