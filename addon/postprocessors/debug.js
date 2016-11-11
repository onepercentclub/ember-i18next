/**
 * An i18next postprocessor function that prepends the i18n key to the localized text.
 * Useful for debugging scenarios where you want to know the name of the string that
 * needs to be changed.
 *
 * @see http://i18next.com/docs/ownplugin/#postprocessor
 */
const debugPostprocessor = {
  type: 'postProcessor',
  name: 'ember-i18next-debug',
  process(value, key) {
    return `(${key}) ${value}`;
  }
};

export default debugPostprocessor;
