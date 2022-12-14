import {
  defineComponent,
  computed,
  toRefs,
  reactive,
  createVNode,
  mergeProps,
  isVNode,
  cloneVNode,
} from "vue";
import {
  useMultiStyleConfig,
  omitThemingProps,
  luniand,
  useStyles,
  StylesProvider,
} from "@luniand-ui/system";
import { formControlProps, useFormControl } from "@luniand-ui/form-control";
import { SAO, getValidChildren } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import { warn, filterUndefined } from "@luniand-ui/utils";

function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };
  return _extends.apply(this, arguments);
}

var LInput = defineComponent({
  name: "LInput",
  props: _extends(
    {
      modelValue: String,
    },
    formControlProps,
    {
      focusBorderColor: SAO,
      isFullWidth: [Boolean, Array],
      errorBorderColor: SAO,
    },
    vueThemingProps
  ),
  emits: ["update:modelValue", "input", "change"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      attrs = _ref.attrs;
    var styles = useMultiStyleConfig("Input", props);
    var ownProps = computed(function () {
      return toRefs(reactive(omitThemingProps(props)));
    });
    var input = useFormControl(ownProps.value);

    var handleInput = function handleInput(e) {
      var _e$currentTarget, _e$currentTarget2, _e$currentTarget3;

      emit(
        "update:modelValue",
        e == null
          ? void 0
          : (_e$currentTarget = e.currentTarget) == null
          ? void 0
          : _e$currentTarget.value
      );
      emit(
        "input",
        e,
        e == null
          ? void 0
          : (_e$currentTarget2 = e.currentTarget) == null
          ? void 0
          : _e$currentTarget2.value
      );
      emit(
        "change",
        e,
        e == null
          ? void 0
          : (_e$currentTarget3 = e.currentTarget) == null
          ? void 0
          : _e$currentTarget3.value
      );
    };

    return function () {
      return createVNode(
        luniand.input,
        mergeProps(
          {
            __luniandIsRaw: true,
          },
          input.value,
          {
            value: props.modelValue,
            onInput: handleInput,
            __css: styles.value.field,
            __label: "input",
          },
          attrs
        ),
        null
      );
    };
  },
});
LInput.id = "LInput";

function _isSlot$1(s) {
  return (
    typeof s === "function" ||
    (Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s))
  );
}

var placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent",
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent",
  },
};
var LStyledAddon = luniand("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
});

/**
 * LInputAddon
 *
 * Element to append or prepend to an input
 */
var LInputAddon = defineComponent({
  name: "LInputAddon",
  props: {
    placement: {
      type: String,
      default: "left",
    },
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;

    try {
      var placementStyles = computed(function () {
        return placements[props.placement];
      });
      var styles = useStyles();
      return function () {
        return createVNode(
          LStyledAddon,
          mergeProps(
            {
              __css: _extends({}, styles.value.addon, placementStyles.value),
            },
            attrs
          ),
          _isSlot$1(slots)
            ? slots
            : {
                default: function _default() {
                  return [slots];
                },
              }
        );
      };
    } catch (error) {
      warn({
        condition: !!error,
        message:
          "`LInputAddon` can only be used inside the `LInputGroup` component.",
      });
      console.error(error);
      return function () {
        return null;
      };
    }
  },
});
/**
 * LInputLeftAddon
 *
 * Element to prepend to the left of an input
 */

var LInputLeftAddon = defineComponent({
  name: "LInputLeftAddon",
  setup: function setup(_, _ref2) {
    var slots = _ref2.slots,
      attrs = _ref2.attrs;
    return function () {
      return createVNode(
        LInputAddon,
        mergeProps(
          {
            placement: "left",
            __label: "input__left-addon",
          },
          attrs
        ),
        _isSlot$1(slots)
          ? slots
          : {
              default: function _default() {
                return [slots];
              },
            }
      );
    };
  },
});
LInputLeftAddon.id = "LInputLeftAddon";
/**
 * LInputRightAddon
 *
 * Element to append to the right of an input
 */

var LInputRightAddon = defineComponent({
  name: "LInputRightAddon",
  setup: function setup(_, _ref3) {
    var slots = _ref3.slots,
      attrs = _ref3.attrs;
    return function () {
      return createVNode(
        LInputAddon,
        mergeProps(
          {
            placement: "right",
            __label: "input__right-addon",
          },
          attrs
        ),
        _isSlot$1(slots)
          ? slots
          : {
              default: function _default() {
                return [slots];
              },
            }
      );
    };
  },
});
LInputRightAddon.id = "LInputRightAddon";

var LInputGroup = defineComponent({
  name: "LInputGroup",
  props: _extends({}, vueThemingProps),
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
      attrs = _ref.attrs;
    var styleAttrs = computed(function () {
      return mergeProps(attrs, props);
    });
    var styles = useMultiStyleConfig("Input", styleAttrs.value);
    var input = computed(function () {
      var _styles$value;

      return (_styles$value = styles.value) == null
        ? void 0
        : _styles$value.field;
    });
    var unthemedProps = computed(function () {
      return omitThemingProps(styleAttrs.value);
    });
    StylesProvider(styles);
    return function () {
      var groupStyles = {};
      var validChildren = getValidChildren(slots);
      validChildren.forEach(function (vnode) {
        if (!styles.value) return; // @ts-expect-error Here we internally check for the appended `id` prop to the component

        if (input.value && vnode.type.id === "LInputLeftElement") {
          // @ts-expect-error
          groupStyles.paddingStart = input.value.height || input.value.h;
        } // @ts-expect-error

        if (input.value && vnode.type.id === "LInputRightElement") {
          // @ts-expect-error
          groupStyles.paddingEnd = input.value.height || input.value.h;
        } // @ts-expect-error

        if (input.value && vnode.type.id === "LInputLeftAddon") {
          groupStyles.borderEndRadius = 0;
        } // @ts-expect-error

        if (input.value && vnode.type.id === "LInputRightAddon") {
          groupStyles.borderStartRadius = 0;
        }
      });
      var clones = validChildren.map(function (vnode) {
        var _vnode$props, _vnode$props2, _vnode$type;

        var theming = filterUndefined({
          size:
            ((_vnode$props = vnode.props) == null
              ? void 0
              : _vnode$props.size) || props.size,
          variant:
            ((_vnode$props2 = vnode.props) == null
              ? void 0
              : _vnode$props2.size) || props.variant,
        }); // @ts-ignore

        return ((_vnode$type = vnode.type) == null
          ? void 0
          : _vnode$type.name) !== "LInput"
          ? cloneVNode(vnode, theming)
          : cloneVNode(
              vnode,
              Object.assign(
                theming,
                groupStyles // vnode.props
              )
            );
      });
      return createVNode(
        luniand.div,
        mergeProps(
          {
            __label: "input__group",
            __css: {
              width: "100%",
              display: "flex",
              position: "relative",
            },
          },
          unthemedProps.value
        ),
        {
          default: function _default() {
            return clones;
          },
        }
      );
    };
  },
});

function _isSlot(s) {
  return (
    typeof s === "function" ||
    (Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s))
  );
}

var LStyledElement = luniand("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2,
  },
});
var LInputElement = defineComponent({
  name: "LInputElement",
  props: {
    placement: {
      type: String,
      default: "left",
    },
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
      slots = _ref.slots;
    var styles = useStyles();
    var elementStyles = computed(function () {
      var _styles$value, _ref2;

      var input =
        (_styles$value = styles.value) == null ? void 0 : _styles$value.field;
      var attr = props.placement === "left" ? "insetStart" : "insetEnd";
      return (
        (_ref2 = {}),
        (_ref2[attr] = "0"),
        (_ref2.width = (input == null ? void 0 : input.height) || input.h),
        (_ref2.height =
          (input == null ? void 0 : input.height) ||
          (input == null ? void 0 : input.h)),
        (_ref2.fontSize = input == null ? void 0 : input.fontSize),
        _ref2
      );
    });
    return function () {
      return createVNode(
        LStyledElement,
        mergeProps(
          {
            __css: elementStyles.value,
          },
          attrs
        ),
        _isSlot(slots)
          ? slots
          : {
              default: function _default() {
                return [slots];
              },
            }
      );
    };
  },
}); // This is used in `l-input-group.tsx`

LInputElement.id = "LInputElement";
var LInputLeftElement = defineComponent({
  name: "LInputLeftElement",
  setup: function setup(_, _ref3) {
    var attrs = _ref3.attrs,
      slots = _ref3.slots;
    return function () {
      return (
        // @ts-expect-error Untyped internal prop
        createVNode(
          LInputElement,
          mergeProps(
            {
              placement: "left",
              __label: "input__left-element",
            },
            attrs
          ),
          _isSlot(slots)
            ? slots
            : {
                default: function _default() {
                  return [slots];
                },
              }
        )
      );
    };
  },
}); // This is used in `l-input-group.tsx`

LInputLeftElement.id = "LInputLeftElement";
var LInputRightElement = defineComponent({
  name: "LInputRightElement",
  setup: function setup(_, _ref4) {
    var attrs = _ref4.attrs,
      slots = _ref4.slots;
    return function () {
      return createVNode(
        LInputElement,
        mergeProps(
          {
            placement: "right",
            __label: "input__right-element",
          },
          attrs
        ),
        _isSlot(slots)
          ? slots
          : {
              default: function _default() {
                return [slots];
              },
            }
      );
    };
  },
}); // This is used in `l-input-group.tsx`

LInputRightElement.id = "LInputRightElement";

export {
  LInput,
  LInputAddon,
  LInputGroup,
  LInputLeftAddon,
  LInputLeftElement,
  LInputRightAddon,
  LInputRightElement,
};
