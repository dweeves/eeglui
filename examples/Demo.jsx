import euiButton from '../UI/euiButton.jsx';

export default {
  components: {
    euiButton
  },

  render() {
    return (
      <v-app>
        <v-content>
          Hello World
          <euiButton color="red" onClick={() => {console.log('titouan')}}>MyButton</euiButton>
        </v-content>
      </v-app>
    );
  }
};
