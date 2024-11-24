export const COMPONENT_NAME = 'ElOption'
export const optionProps = {
  /**
   * @description value of option
   */
  value: {
    required: true as const,
    type: [String, Number, Boolean, Object],
  },
  /**
   * @description label of option, same as `value` if omitted
   */
  label: [String, Number],
  created: Boolean,
  /**
   * @description whether option is disabled
   */
  disabled: Boolean,
}
