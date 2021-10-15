import React, {useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './MainScreen.styles';
import Input from '../components/Input';
import Select from '../components/Select';
import CustomButton from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {bindActionCreators} from 'redux';
import * as action from '../store/actions/main';
import {connect} from 'react-redux';
import {StateProps} from '../store/types/main';

interface IProps {
  weight: number;
  height: number;
  actions: any;
  units: string;
}

const avaliableUnits = [
  {label: 'imperial', value: 'imperial'},
  {label: 'metric', value: 'metric'},
];

const MainScreen = ({weight, actions, height, units}: IProps) => {
  const Save = async () => {
    const json = JSON.stringify({height, weight, units});
    await AsyncStorage.setItem('values', json);
  };

  const unitChange = (newUnit: string) => {
    console.log(newUnit);
    const weightConfig = 2.2046;
    const heightConfig = 3.2808;
    if (newUnit !== units) {
      if (newUnit === 'imperial') {
        actions.setHeight(height * heightConfig);
        actions.setWeight(weight * weightConfig);
      } else {
        actions.setHeight(height / heightConfig);
        actions.setWeight(weight / weightConfig);
      }
    }
    actions.setUnits(newUnit);
  };

  useEffect(() => {
    AsyncStorage.getItem('values').then(value => {
      if (value) {
        const savedValues = JSON.parse(value);
        actions.setHeight(savedValues.height);
        actions.setWeight(savedValues.weight);
        actions.setUnits(savedValues.units);
      }
    });
  }, [actions]);

  return (
    <SafeAreaView style={styles.safeStyle}>
      <View style={styles.infoContStyle}>
        <Input
          onChangeText={value => actions.setWeight(value)}
          value={weight}
          label={'Weight'}
          keyboardType="numeric"
          inputLabel={units === 'imperial' ? 'lbs' : 'kg'}
        />
        <Input
          onChangeText={value => actions.setHeight(value)}
          value={height}
          label={'Height'}
          keyboardType="numeric"
          inputLabel={units === 'imperial' ? 'ft' : 'm'}
        />
        <Select
          onValueChange={unitChange}
          value={units}
          items={avaliableUnits}
        />
        <CustomButton title="Save" onPress={Save} />
      </View>
    </SafeAreaView>
  );
};

export default connect(
  (state: StateProps) => ({
    weight: state.weight,
    height: state.height,
    units: state.units,
  }),
  dispatch => ({
    actions: bindActionCreators(action, dispatch),
  }),
)(MainScreen);
