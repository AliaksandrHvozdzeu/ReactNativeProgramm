import React, {useCallback} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

type LikeButtonProps = {};

const LikeButton: React.FC<LikeButtonProps> = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.navigate('AddProductWishModal');
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
