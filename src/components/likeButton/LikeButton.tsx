import React, {useCallback} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';

type LikeButtonProps = {};

const LikeButton: React.FC<LikeButtonProps> = () => {
  const onPress = useCallback(() => {
    //Need to implement logic for adding product to wish list
  }, []);
  return (
    <View style={styles.icon}>
      <Button
        style={styles.like}
        icon={styles.iconStyle}
        iconRight
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        onPress={onPress}
      />
    </View>
  );
};

export default LikeButton;
