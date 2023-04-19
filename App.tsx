/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from './components/Header';

import StartGameScreen from './screens/StartGameScreen';

import React from 'react';



// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="this is my first tag" />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);


  const startGameHandler = (number: any) => {
    setUserNumber(number);
  };



  let content = <StartGameScreen onStartGame={startGameHandler} />;



  return (
    <SafeAreaView style={styles.screen}>
      <Header title="THIS IS HEADER" />
      {content}
      {/* <GameScreen setCurrentScreen={setCurrentScreen} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

// export default App;
