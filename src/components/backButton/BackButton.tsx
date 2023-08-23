import React, {useCallback} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

type BackButtonProps = {};

const BackButton: React.FC<BackButtonProps> = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.iconLeft}>
      <Button
        style={styles.back}
        icon={styles.icon}
        iconRight
        buttonStyle={styles.buttonStyle}
        containerStyle={styles.containerStyle}
        onPress={onPress}
      />
    </View>
  );
};

export default BackButton;
