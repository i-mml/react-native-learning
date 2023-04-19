import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BodyText = (props: any) => {
  return (
    <Text style={styles?.text} {...props}>
      {props?.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "iran-sans",
    color: "blue",
  },
});
export default BodyText;
