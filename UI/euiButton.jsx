import {withStyle} from '../HOC/withStyle.js';
import {withProps} from '../HOC/withProps.js';
import {compose} from '../helpers/compose.js';

const enhance = compose(
  withStyle({}),
  withProps({round: true, color: 'secondary'})
);

export default enhance('v-btn');
