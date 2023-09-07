export default ({config}) => ({
  ...config,
  name: 'React Native Programm',
  slug: 'react-native-programm',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
