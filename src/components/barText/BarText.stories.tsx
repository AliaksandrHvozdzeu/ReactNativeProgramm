import BarText from './BarText';

export default {
  title: 'BarText',
  component: BarText,
  argTypes: {
    text: 'Main',
  },
};

export const Default = {
  args: {
    text: 'Default',
  },
};

export const Main = {
  args: {...Default.args.text, text: 'Main'},
};

export const Products = {
  args: {...Default.args.text, state: 'Products'},
};
