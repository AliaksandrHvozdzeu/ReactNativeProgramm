import Bar from './Bar';

export default {
  title: 'Bar',
  component: Bar,
  argTypes: {
    text: 'Test',
    isSearch: false,
    isLike: true,
    isCard: true,
  },
};

export const Default = {
  args: {
    text: 'Default',
    isSearch: false,
    isLike: true,
    isCard: true,
  },
};

export const Search = {
  args: {
    text: 'Default',
    isSearch: true,
    isLike: false,
    isCard: true,
  },
};
