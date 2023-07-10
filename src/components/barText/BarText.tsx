import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

type barTextProps = {
  text: string;
};

const BarText = ({text}: barTextProps) => {
  return <Text style={styles.name}>{text}</Text>;
};

export default BarText;
