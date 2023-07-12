import React, {useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

const LikeButton = () => {
  const [like, setLike] = useState(false);
  const [likeType, setLikeType] = useState('hearto');

  const doLike = () => {
    if (like) {
      setLikeType('heart');
      setLike(false);
    } else {
      setLikeType('hearto');
      setLike(true);
    }
  };

  return (
    <View style={styles.icon}>
      <Icon
        style={styles.like}
        type="antdesign"
        name={likeType}
        color={styles.like.color}
        onPress={doLike}
      />
    </View>
  );
};

export default LikeButton;
