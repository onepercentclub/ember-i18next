import { module, test } from 'qunit';
import debugPostprocessor from 'ember-i18next/postprocessors/debug';

module('debug postprocessor');

test('it prepends the key to the localized text', function (assert) {
  const processedText = debugPostprocessor.process('test text', 'testkey', {}, {});
  assert.equal(processedText, '(testkey) test text', 'key is prepended to localized text');
});
