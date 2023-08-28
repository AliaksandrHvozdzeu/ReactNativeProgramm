import { View } from "react-native";
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
      style={{
        flex: 1,
        backgroundColor: COLORS.neutral_0,
        padding: 8,
      }}
    >
      <Story />
    </View>
  ),
];
