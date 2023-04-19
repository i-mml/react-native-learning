import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';



const Header = ({ title = '' }) => {
  return (
    <View
      style={{
        ...styles?.headerBase,
        // ...(Platform.OS === "ios" ? styles?.headerIos : styles?.headerAndroid),
        ...Platform.select({
          ios: styles.headerIos,
          // @ts-ignore
          android: styles.headerAndroid,
        }),
      }}>
      <Text style={styles?.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    paddingVertical: 18,
    justifyContent: 'center',
  },
  headerIos: {
    backgroundColor: 'white',
    borderBottomColor: 'black',
  },
  headerAndroid: {
    backgroundColor: "#654820",
    borderBottomWidth: 0,
  },
  text: {
    color: Platform.OS === 'ios' ? 'black' : '#fff',
    textAlign: 'center',
    fontSize: 19,
  },
});
export default Header;
