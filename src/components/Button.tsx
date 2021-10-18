import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {windowWidth} from '../configs/dimentions';
import colors from '../configs/colors';

type TButtonProps = {
  title: string | string[];
  onPress?: () => void;
  style?: Object;
  type?: string;
  disabled?: boolean;
};

const CustomButton: React.FC<TButtonProps> = props => {
  const {style, onPress, title, disabled = false} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style]}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: windowWidth * 0.3,
    borderRadius: 25,
    borderColor: colors.grey,
    borderWidth: 1,
    height: 50,
    marginTop: 15,
    backgroundColor: colors.secondaryColor,
  },
  text: {
    fontSize: 16,
  },
});

export default CustomButton;
