// Note the lack of a leading slash (/)
import Icon from 'components/Icon'

export default function () {
  return {
    // other vuetify options here,
    icon: {
      values: {
        upload: { component: Icon }
      }
    }
  };
};
