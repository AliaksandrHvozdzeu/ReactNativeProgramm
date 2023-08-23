import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

type BarTextProps = {
  text: string;
};

const BarText: React.FC<BarTextProps> = ({text}) => (
  <Text style={styles.name}>{text}</Text>
);

export default BarText;
