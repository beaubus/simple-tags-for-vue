'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = {
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
  data: function data() {
    return {
      tags: this.modelValue,
      existing_tags: this.existing,
      input_text: ''
    };
  },
  methods: {
    addTag: function addTag(event) {
      var new_tag = event.target.value ? event.target.value : event.target.innerText;
      if (!new_tag) return;
      if (this.tags.find(function (tag) {
        return tag === new_tag;
      })) return;
      this.tags.push(new_tag);
      this.$emit('update:modelValue', this.tags);
      this.input_text = ''; // clear input
    },
    removeTag: function removeTag(tag) {
      var index = this.tags.findIndex(function (t) {
        return t === tag;
      });
      this.tags.splice(index, 1);
      this.$emit('update:modelValue', this.tags);
    }
  },
  computed: {
    existing_without_selected: function existing_without_selected() {
      var _this = this;

      var without_selected = this.existing_tags.filter(function (tag) {
        return !_this.tags.includes(tag);
      });
      if (!this.input_text) return without_selected;
      return without_selected.filter(function (tag) {
        return tag.includes(_this.input_text);
      });
    }
  }
};var _hoisted_1 = /*#__PURE__*/vue.createTextVNode("     ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", null, [vue.createVNode("div", {
    class: $props.tailwind ? 'flex flex-wrap' : null
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($data.tags, function (tag) {
    return vue.openBlock(), vue.createBlock("div", {
      class: $props.tailwind ? 'bg-blue-300 rounded-2xl text-white mr-2 mb-2 flex items-center pl-2 pr-1' : null
    }, [vue.createVNode("span", null, vue.toDisplayString(tag), 1), _hoisted_1, vue.createVNode("span", {
      onClick: function onClick($event) {
        return $options.removeTag(tag);
      },
      style: {
        "cursor": "pointer"
      }
    }, "ⓧ", 8, ["onClick"])], 2);
  }), 256))], 2), vue.createVNode("div", null, [vue.withDirectives(vue.createVNode("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.input_text = $event;
    }),
    onKeydown: _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers(function () {
      return $options.addTag && $options.addTag.apply($options, arguments);
    }, ["prevent"]), ["enter"]))
  }, null, 544), [[vue.vModelText, $data.input_text]]), (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($data.tags, function (tag) {
    return vue.openBlock(), vue.createBlock("input", {
      type: "hidden",
      name: "tags[]",
      value: tag
    }, null, 8, ["value"]);
  }), 256))]), vue.createVNode("div", {
    class: $props.tailwind ? 'mt-4 flex flex-wrap' : null
  }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.existing_without_selected, function (tag) {
    return vue.openBlock(), vue.createBlock("div", {
      class: $props.tailwind ? 'existing-tags bg-blue-200 rounded-2xl text-white mr-2 mb-2 flex items-center px-2' : null,
      style: {
        "cursor": "pointer"
      }
    }, [vue.createVNode("span", {
      onClick: _cache[3] || (_cache[3] = function () {
        return $options.addTag && $options.addTag.apply($options, arguments);
      })
    }, vue.toDisplayString(tag), 1)], 2);
  }), 256))], 2)]);
}script.render = render;// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('SimpleTagsForVue', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;