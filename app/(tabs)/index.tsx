import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, Pressable, Switch, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Svg, { Path } from 'react-native-svg'
import { BlurView } from 'expo-blur'





import { SafeAreaView } from 'react-native-safe-area-context'
const { width } = Dimensions.get("window");


export default function index() {

  let dividerHeight = 80;
  if (width >= 768) dividerHeight = 120;
  if (width >= 1025) dividerHeight = 180;
  if (width >= 2100) dividerHeight = 250;

  const [isCheck, setIscheck] = useState(false)

  return (


    <SafeAreaView style={styles.safeAreaview}>

      {/* top shape divider */}
      <Svg
        height={dividerHeight}
        width={width}
        viewBox="0 0 10.40 7"
        preserveAspectRatio="none"
        style={styles.safeAreaview}
      >
        <Path
          d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z"
          fill="#607cdaff"
        />
      </Svg>

      <Text style={styles.topText}>Login now</Text>

      {/* bottom shape divider */}
      <Svg

        height={dividerHeight}
        width={width}
        viewBox="30 30 9.34 52"
        preserveAspectRatio="none"
        style={styles.svg}
      >
        <Path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
             82.39-16.72,168.19-17.73,250.45-.39
             C823.78,31,906.67,72,985.66,92.83
             c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35
             A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="#607cdaff"
        />
      </Svg>


      {/* for double style {[styles.loginContainer, styles.glass]} */}

      <View style={styles.loginContainer}  >


        <Image source={require('@/assets/images/logoPurisima.png')} style={styles.ImageLogo}></Image>

        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.welcomeTextInfo}>Please enter your details to login</Text>
        <Text style={styles.textfieldText}>Email</Text>
        <TextInput style={styles.textfieldInput} placeholder='2022000351' placeholderTextColor="grey"></TextInput>

        <Text style={styles.textfieldText}>Password</Text>
        <TextInput style={styles.textfieldInput} placeholder='**********' placeholderTextColor="gray"></TextInput>




        <TouchableHighlight style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableHighlight>
        <View style={styles.deviderPanel}>
          {/* <Text style={styles.orCss}>OR</Text> */}
        </View>
        <View style={{
          flexDirection: "row",
          gap: 5,
          marginVertical: 10,
        }}>
          <Text style={{
            fontWeight: 500,
            fontSize: 16,


          }}>Don't have an account?</Text>
          <Pressable >
            <Text style={{
              textDecorationLine: "underline",
              color: "blue",
              fontWeight: 500,
              fontSize: 16,
            }}
            >Register</Text>
          </Pressable >
        </View>




      </View>


    </SafeAreaView>
  )

}

const styles = StyleSheet.create({

  safeAreaview: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "white",




  },
  topText: {
    fontWeight: 700,
    marginTop: 50,
    marginLeft: 20,
    color: "white",
    fontSize: 30,
    position: "absolute",

  },
  loginContainer: {
    width: "95%",

    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "snow",
    borderRadius: 10,
    margin: "auto",
    paddingBottom: 40,
    backgroundColor: "white",
    borderColor: "snow",
    borderWidth: 1,

    shadowOffset: {
      width: 5,   // Horizontal offset
      height: 7, // Vertical offset
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    // These elevation properties are for Android
    elevation: 10,


  },
  glass: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  ImageLogo: {
    width: 100,
    height: 100,
    backgroundColor: "none",
    borderRadius: "50%",
    marginVertical: 10,

  },
  welcomeText: {
    fontWeight: 700,
    fontSize: 15,

  },
  welcomeTextInfo: {
    fontWeight: 500,
    marginBottom: 10,

  },
  textfieldText: {
    fontWeight: 600,
    marginVertical: 5,
    marginRight: "auto",
    marginLeft: 10,

  },
  textfieldInput: {
    width: "98%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 10,



  },
  loginButton: {
    width: "98%",
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    //borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#607cdaff",


  },
  loginButtonText: {
    color: "white",
    fontWeight: 500,
    fontSize: 17,

  },
  deviderPanel: {
    backgroundColor: "black",
    width: "98%",
    height: 1,
    marginTop: 20,

  },

  svg: {
    transform: [{ rotate: "180deg" }], // rotates like CSS
    position: "absolute",

    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    
    
  },
  container: {
    position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    height: "100%",
    width: "100%",
    marginTop: 10,
    
    
  },
})
