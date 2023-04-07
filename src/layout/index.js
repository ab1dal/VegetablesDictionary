import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Audio } from "expo-av";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyle } from "../../global-style";

class DefaultLayout extends React.Component {
  state = {
    sound: null,
  }
  
  async componentDidMount() {
    const { sound } = await Audio.Sound.createAsync(
      require('./path/to/sound.mp3')
    );
    this.setState({ sound });
  }

  componentDidMount() {
    this.state.sound.playAsync();
  }

  // const backgroundSound = new Sound(
  //   "background.mp3",
  //   Sound.MAIN_BUNDLE,
  //   (error) => {
  //     if (error) {
  //       console.log("Failed to load sound", error);
  //       return;
  //     }
  //   }
  // );
  // useEffect(() => {
  //   async function handleBacksound() {
  //     const statusMusic = await AsyncStorage.getItem("statusMusic");

  //     if (statusMusic) {
  //       const music = JSON.parse(statusMusic);
  //       if (music.status) {
  //         backgroundSound.play();
  //       } else {
  //         backgroundSound.pause();
  //       }
  //     }
  //   }
  //   handleBacksound();
  // }, [status]);
  render() {
    return (
      <View style={globalStyle.defaultContainer}>
        <Image
          style={globalStyle.bg}
          source={require("@assets/BG/gradient.png")}
        />
      </View>
    );
  };
};
export default DefaultLayout;
