import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  homeButton: {
    width: 150,
    height: 150
  },  
  bg: {
    position: "absolute",
    zIndex: -69,
    width: "100%",
    height: "100%",
  },
  defaultContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  contentVegetables: {
    flexDirection: 'row',
    position: 'absolute',
    top: 260,
    alignItems: 'center',
  },
  bintang: {
    height: 50,
    width: 50,
    marginHorizontal: -8,
    marginTop: -15
  },
  balon: {
    width: 140,
    height: 200
  },
  popUp: {
    width: 360,
    height: 360,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  balonButton: {
    alignItems: 'center'
  },
  imageButton: {
    width: 70,
    height: 60,
    position: 'absolute',
    top: 50
  }
});
