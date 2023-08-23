import React, {useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';

const LikeButton = () => {
  const [like, setLike] = useState(false);
  const [likeType, setLikeType] = useState('hearto');

  const doLike = () => {
    if (like) {
      fadeOut();
      setLikeType('heart');
      setLike(false);
    } else {
      fadeIn();
      setLikeType('hearto');
      setLike(true);
    }
  };

  const fadeAnim = useRef(new Animated.Value(100)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.3,
      duration: 750,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.icon}>
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
          },
        ]}>
        <Icon
          style={styles.like}
          type="antdesign"
          name={likeType}
          color={styles.like.color}
          onPress={doLike}
        />
      </Animated.View>
    </View>
  );
};

export default LikeButton;
