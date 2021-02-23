import { openBlock, createBlock, createVNode, Fragment, renderList, toDisplayString, withDirectives, withKeys, withModifiers, vModelText, createTextVNode } from 'vue';

var script = {
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
    tailwind: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue'],

  data() {
    return {
      tags: this.modelValue,
      existing_tags: this.existing,
      input_text: ''
    };
  },

  methods: {
    addTag(event) {
      var new_tag = event.target.value ? event.target.value : event.target.innerText;
      if (!new_tag) return;
      if (this.tags.find(tag => tag === new_tag)) return;
      this.tags.push(new_tag);
      this.$emit('update:modelValue', this.tags);
      this.input_text = ''; // clear input
    },

    removeTag(tag) {
      let index = this.tags.findIndex(t => t === tag);
      this.tags.splice(index, 1);
      this.$emit('update:modelValue', this.tags);
    }

  },
  computed: {
    existing_without_selected() {
      var without_selected = this.existing_tags.filter(tag => !this.tags.includes(tag));
      if (!this.input_text) return without_selected;
      return without_selected.filter(tag => tag.includes(this.input_text));
    }

  }
};

const _hoisted_1 = /*#__PURE__*/createTextVNode("     ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("div", {
    class: $props.tailwind ? 'flex flex-wrap' : null
  }, [(openBlock(true), createBlock(Fragment, null, renderList($data.tags, tag => {
    return openBlock(), createBlock("div", {
      class: $props.tailwind ? 'bg-blue-300 rounded-2xl text-white mr-2 mb-2 flex items-center pl-2 pr-1' : null
    }, [createVNode("span", null, toDisplayString(tag), 1), _hoisted_1, createVNode("span", {
      onClick: $event => $options.removeTag(tag),
      style: {
        "cursor": "pointer"
      }
    }, "ⓧ", 8, ["onClick"])], 2);
  }), 256))], 2), createVNode("div", null, [withDirectives(createVNode("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.input_text = $event),
    onKeydown: _cache[2] || (_cache[2] = withKeys(withModifiers((...args) => $options.addTag && $options.addTag(...args), ["prevent"]), ["enter"]))
  }, null, 544), [[vModelText, $data.input_text]]), (openBlock(true), createBlock(Fragment, null, renderList($data.tags, tag => {
    return openBlock(), createBlock("input", {
      type: "hidden",
      name: "tags[]",
      value: tag
    }, null, 8, ["value"]);
  }), 256))]), createVNode("div", {
    class: $props.tailwind ? 'mt-4 flex flex-wrap' : null
  }, [(openBlock(true), createBlock(Fragment, null, renderList($options.existing_without_selected, tag => {
    return openBlock(), createBlock("div", {
      class: $props.tailwind ? 'existing-tags bg-blue-200 rounded-2xl text-white mr-2 mb-2 flex items-center px-2' : null,
      style: {
        "cursor": "pointer"
      }
    }, [createVNode("span", {
      onClick: _cache[3] || (_cache[3] = (...args) => $options.addTag && $options.addTag(...args))
    }, toDisplayString(tag), 1)], 2);
  }), 256))], 2)]);
}

script.render = render;

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('SimpleTagsForVue', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
