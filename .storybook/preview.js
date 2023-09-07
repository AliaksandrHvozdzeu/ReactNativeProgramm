import { StyleSheet, View } from "react-native";
import { COLORS } from "../src/utils/colors";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <View
      style={styles.decoratorView}
    >
      <Story />
    </View>
  ),
];

export const styles = StyleSheet.create({
  decoratorView: {
    flex: 1,
    backgroundColor: COLORS.neutral_0,
    padding: 8,
  }
});
