import React, {useState, useEffect} from 'react'
import { View, Image } from "react-native";

const Splash = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const timeout = setTimeout(() => {
            setIsLoading (false)
            navigation.navigate('home')
        }, 1500);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return(
        <View style={{flex:1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width: 364, height: 364}} source={require('../assets/splash.png')} />
        </View>
    );
};
export default Splash;
