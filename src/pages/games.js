import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text, SafeAreaView, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import axios from "axios";

import { globalStyle } from "../../global-style";
import Modal from "react-native-modal";

const Games = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalSalahVisible, setIsModalSalahVisible] = useState(false);

  const [materi, setMateri] = useState([]);
  const [page, setPage] = useState(1);
  const [nilai, setNilai] = useState(0);
  const [values, setValues] = useState([
    {
      answer: "kosong",
    },
    {
      answer: "kosong",
    },
    {
      answer: "kosong",
    },
    {
      answer: "kosong",
    },
    {
      answer: "kosong",
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //axios 
  const getMateri = async () => {
    await axios
      .get(
        `https://55e9-36-73-34-173.ap.ngrok.io/api/quizzes`
      )
      .then((res) => {
        setMateri(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMateri();
  }, []);

  const value = materi.data?.find((v) => v.id === Number(page));

  const postMateri = async (answer) => {
    return await axios
      .post(
        `http://{yourIpAddress}:5000/api/jobsheet/one`,
        {
          quizId: page,
          answer: answer,
        }
      )
      .then((response) => {
        const newValues = [...values]
        newValues[currentQuestion].answer= response.data.message
        setValues(newValues)

        return response.data.message
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  //import font 
  const [loaded] = useFonts({
    Mochiy: require("../assets/font/MochiyPopPOne-Regular.ttf"),
  });

  if (!loaded) {
    return (
      <View style={globalStyle.defaultContainer}>
        <Image
          style={globalStyle.bg}
          source={require("../assets/BG/gradient.png")}
        />
      </View>
    );
  }

  //button handle function 
  const handleButton = async (answer) => {
    const response = await postMateri(answer);
    setPage(page+1)
    setCurrentQuestion(currentQuestion+1)
    if (response === "benar") {
        setNilai(nilai+1)
        setIsModalVisible(true);
        setTimeout(() => {
            setIsModalVisible(false)
        }, 500);
    } else {
      setIsModalSalahVisible(true)
      setTimeout(()=>{
        setIsModalSalahVisible(false)
      }, 500)
    }
  };

  if (page == 6) {
    return (
      <SafeAreaView style={globalStyle.defaultContainer}>
          <Image
          style={globalStyle.bg}
          source={require("../assets/BG/gradient.png")}
          />
          <Image style={{width: 380, height: 380}} source={require('@assets/logo.png')}/>
          <Image style={{width: 380, height: 180, marginTop: -180, zIndex: 2}} source={require('@assets/pitaScore.png')}/>
          <Image style={{width: 380, height: 380, marginTop: -60}} source={require('@assets/papan.png')}/>
          <Text style={{fontFamily: 'Mochiy', color: 'white', fontSize: 80, position: 'absolute', top: 400}}>
            {nilai * 20}%
          </Text>
          <TouchableOpacity style={{position: 'absolute', bottom: 230}} onPress={() => navigation.navigate('home')}>
                <Image style={{width: 400, height: 80}} source={require('@assets/logoBack.png')}/>
          </TouchableOpacity>
      </SafeAreaView>
    )
  }
  //render
  return (
    <View style={globalStyle.defaultContainer}>
      <Image
        style={globalStyle.bg}
        source={require("../assets/BG/gradient.png")}
      />
      <Image
        style={{ width: 380, height: 120, zIndex: 2, marginTop: 120 }}
        source={require("../assets/pitaGames.png")}
      />
      <View
        style={{
          zIndex: 69,
          flexDirection: "row",
          justifyContent: "space-between",
          width: 340,
          marginTop: -115,
          marginBottom: 13,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Image source={require("../assets/icon/back.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        {values.map((value, index)=> {
          return(
          <Image
            key={index}
            style={globalStyle.bintang}
            source={value.answer == 'benar' ?
              require('@assets/icon/bintangKuning.png')
              : value.answer == 'salah' ?
              require('@assets/icon/bintangMerah.png')
              : 
              require('@assets/icon/bintangAbu.png')
          }
          />)
        })}
      </View>
      <Image
        style={{
          width: 380,
          height: 610,
          zIndex: -60,
          position: "absolute",
          marginTop: 205,
        }}
        source={require("../assets/papanQuiz.png")}
      />
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontFamily: "Mochiy", color: "white", fontSize: 22 }}>
          {value?.quiz}
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity
            style={globalStyle.balonButton}
            onPress={() => handleButton("a")}
          >
            <Image
              style={globalStyle.balon}
              source={require("../assets/icon/balon.png")}
            />
            <Image
              style={globalStyle.imageButton}
              source={{ uri: `${value?.a}` }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyle.balonButton}
            onPress={() => handleButton("b")}
          >
            <Image
              style={globalStyle.balon}
              source={require("../assets/icon/balon.png")}
            />
            <Image
              style={globalStyle.imageButton}
              source={{ uri: `${value?.b}` }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={globalStyle.balonButton}
          onPress={() => handleButton("c")}
        >
          <Image
            style={globalStyle.balon}
            source={require("../assets/icon/balon.png")}
          />
          <Image
            style={globalStyle.imageButton}
            source={{ uri: `${value?.c}` }}
          />
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible}>
        <TouchableOpacity
          style={globalStyle.modal}
          onPress={() => setIsModalVisible(false)}
        >
          <Image
            style={globalStyle.popUp}
            source={require("../assets/popup/benar.png")}
          />
        </TouchableOpacity>
      </Modal>
      <Modal isVisible={isModalSalahVisible}>
        <TouchableOpacity
          style={globalStyle.modal}
          onPress={() => setIsModalSalahVisible(false)}
        >
          <Image
            style={globalStyle.popUp}
            source={require("../assets/popup/salah.png")}
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
export default Games;
