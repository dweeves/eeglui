import { createHOCc } from 'vue-hoc';

export function withProps(props) {
  return createHOCc(null, {props});
};
