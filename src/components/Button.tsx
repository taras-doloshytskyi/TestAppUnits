import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
    width: 100,
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
    height: 50,
    marginTop: 15,
    backgroundColor: '#5B5B5B',
  },
  text: {
    fontSize: 16,
  },
});

export default CustomButton;
