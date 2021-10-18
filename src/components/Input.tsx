import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  KeyboardTypeOptions,
} from 'react-native';
import {windowWidth} from '../configs/dimentions';
import colors from '../configs/colors';

type TInputProps = {
  onChangeText: (e: string | number) => void;
  value?: string | number | undefined;
  inputContainerStyle?: Object;
  inputStyle?: Object;
  placeholder?: string;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  inputLabel?: string;
};

const Input: React.FC<TInputProps> = props => {
  const {
    value,
    onChangeText,
    inputContainerStyle,
    inputStyle,
    placeholder,
    label,
    keyboardType,
    inputLabel,
  } = props;
  return (
    <View style={[styles.inputContainer, inputContainerStyle]}>
      {label && <Text style={styles.labelStyle}>{label}</Text>}
      <View style={styles.inputInsideContainer}>
        <TextInput
          style={[styles.input, inputStyle]}
          onChangeText={onChangeText}
          value={String(value)}
          keyboardType={keyboardType}
          placeholder={placeholder}
        />
        {inputLabel && (
          <View style={styles.inputLabelStyle}>
            <Text>{inputLabel}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: windowWidth,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.mainColor,
  },
  input: {
    fontSize: 16,
    color: colors.black,
    paddingLeft: 10,
    height: 40,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 25,
    width: windowWidth - 50,
  },
  inputLabelStyle: {
    height: 40,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    paddingBottom: 5,
    marginLeft: 10,
  },
  inputInsideContainer: {
    flexDirection: 'row',
    height: 40,
  },
});

export default Input;
