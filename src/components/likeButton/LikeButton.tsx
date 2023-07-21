import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Button} from 'react-native-elements';
import {COLORS} from '../../utils/colors';

type likeButtonProps = {
  navigation: any;
};

const LikeButton = ({navigation}: likeButtonProps) => {
  return (
    <View style={styles.icon}>
      <Button
        style={styles.like}
        icon={{
          name: 'hearto',
          type: 'antdesign',
          size: 20,
          color: 'white',
        }}
        iconRight
        buttonStyle={{
          position: 'absolute',
          backgroundColor: COLORS.blue_500,
        }}
        containerStyle={{
          height: 40,
          width: 50,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('AddProductWishModal')}
      />
    </View>
  );
};

export default LikeButton;
