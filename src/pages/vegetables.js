import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import axios from 'axios';

import { globalStyle } from '../../global-style';

const Vegetables = ({navigation}) => {
    const [materi, setMateri] = useState([])
    const [page, setPage] = useState(1);

    const getMateri = () => {
        axios.get(`http://{yourIpAddress}:5000/api/materi/materi`)
        .then((res)=>{
            setMateri(res.data)
        })
        .catch(
            (error) => console.log(error)
        )
    }
    useEffect(() => {
        getMateri();
    }, []);
    const value = materi.data?.find((v) => v.id === Number(page))

    const [loaded] = useFonts({
        Modak: require('../assets/font/Modak-Regular.ttf'),
    });
    if (!loaded) {
        return(
            <View style={globalStyle.defaultContainer}>
                <Image style={globalStyle.bg} source={require('../assets/BG/gradient.png')}/>
            </View>
        )
    }
    return(
        <View style={globalStyle.defaultContainer}>
            <Image style={globalStyle.bg} source={require('../assets/BG/gradient.png')}/>
            <Image style={{width: 380, height: 80, zIndex: 2, marginTop: 150}} source={require('../assets/pitaVegetables.png')}/>
            <View  style={{zIndex: 69, flexDirection: 'row', justifyContent: 'space-between', width: 340, marginTop: -73, marginBottom: 13}}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Image source={require('../assets/icon/back.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    
                </TouchableOpacity>
            </View>
            <Image style={{width: 380, height: 500, zIndex: -60, position: 'absolute', marginTop: 195}} source={require('../assets/papanVegetables.png')}/>
            <View style={{marginTop: 60, flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => {page == 1 ? setPage(page-0) : setPage(page-1)}}>
                    {page == 1 ? 
                    <View style={{width: 150, height: 220}}></View>
                    : <Image style={{width: 150, height: 220}} source={require('../assets/icon/kiri.png')}/>}
                </TouchableOpacity>

                <Image style={{width: '60%', height: '100%',marginHorizontal: -110, zIndex: -4}} source={{ uri: `${value?.image}`}}/>

                <TouchableOpacity onPress={() => {page == 8 ? setPage(page+0) : setPage(page+1)}}>
                    {page == 8 ? 
                    <View style={{width: 150, height: 220}}></View>
                    : <Image style={{width: 150, height: 220}} source={require('../assets/icon/kanan.png')}/>}
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{color: 'white', fontFamily: 'Modak', fontSize: 30, marginTop: 85}}>
                    {value?.veggieName}
                </Text>
            </View>
        </View>
    );
}
export default Vegetables;