import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../configs/colors';

type TSelectProps = {
  items: any;
  onValueChange: (val: string) => void;
  value?: string;
};

const Select: React.FC<TSelectProps> = props => {
  const {onValueChange, items, value} = props;

  return (
    <RNPickerSelect
      style={pickerSelectStyles}
      onValueChange={val => onValueChange(val)}
      items={items}
      value={value}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 15,
    color: colors.black,
    marginTop: 30,
    width: 'auto',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 15,
    color: colors.black,
    marginTop: 30,
    width: 140,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Select;
