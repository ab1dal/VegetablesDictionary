import React from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import { globalStyle } from '../../global-style';

const Home = ({navigation}) => {
    return(
        <SafeAreaView style={globalStyle.defaultContainer}>
          <Image
          style={globalStyle.bg}
          source={require("../assets/BG/gradient.png")}
          />
          <Image style={{width: 380, height: 380}} source={require('@assets/logo.png')}/>
          <Image style={{width: 380, height: 180, marginTop: -180, zIndex: 2}} source={require('@assets/pita.png')}/>
          <Image style={{width: 380, height: 380, marginTop: -60}} source={require('@assets/papan.png')}/>
          <View style={{flexDirection: 'row', position: 'absolute', top: 400}}>
            <TouchableOpacity onPress={() => navigation.navigate('veggie')}>
              <Image style={globalStyle.homeButton} source={require('@assets/logoVegetables.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('games')}>
              <Image style={globalStyle.homeButton} source={require('@assets/logoGames.png')}/>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
}
export default Home;