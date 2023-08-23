import React from 'react';
import {styles} from './styles';
import {ActivityIndicator, Text, View} from 'react-native';
import {COLORS} from '../../utils/colors';

type LoadingProps = {};
const Loading: React.FC<LoadingProps> = () => {
  return (
    <View style={styles.onLoadDataContainer}>
      <ActivityIndicator size="large" color={COLORS.blue_500} />
      <View>
        <Text style={styles.loadingData}>Loading...</Text>
      </View>
    </View>
  );
};

export default Loading;
