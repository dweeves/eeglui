import { createHOCc } from 'vue-hoc';

export function withStyle(style) {
  return createHOCc(null, {style});
};
