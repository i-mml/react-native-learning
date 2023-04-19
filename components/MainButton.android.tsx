import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../constants/Colors';;

let ButtonComponent = TouchableOpacity as any;

//  check version is need in android ( for toucableNativeFeedback)
// @ts-ignore
if (Platform.Version >= 21) {
  ButtonComponent = TouchableNativeFeedback;
}

interface IProps {
  onClick: any
  title: string
}

const MainButton = (props: IProps) => {
  return (
    <View style={styles?.buttonContainer}>
      <ButtonComponent onPress={props.onClick} activeOpacity={0.6}>
        <View style={styles?.button}>
          <Text style={styles.buttonText}>{props?.title}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'iran-sans',
    fontSize: 18,
  },
});
export default MainButton;
