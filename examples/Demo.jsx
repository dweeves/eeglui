import {euiButton} from '../build/eeglui.js';
export default {
  components: {
    euiButton
  },

  render() {
    return (
      <v-app>
        <v-content>
          Hello World
          <euiButton color="red" onClick={() => {console.log('test')}}>MyButton</euiButton>
        </v-content>
      </v-app>
    );
  }
};
