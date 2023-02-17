import * as React from 'react';
import {Text, View, StyleSheet,Image, ScrollView} from 'react-native';

export default function App() {
  return(
    
<ScrollView>
    <View style={style.container}>
    <Text style={style.titulo}>Profissões de TI</Text>
    <Text style={style.subTitulo}>{'\n'} Programador de mobile </Text>
    <Image style={style.img} source={require("./assets/mobile.jpg")}/>

    <Text style={style.subTitulo}> Programador de Backend </Text>
    <Image style={style.img} source={require("./assets/backEnd.jpg")}/> 
    <Text style={style.subTitulo}> Programador de Frontend </Text>
    <Image style={style.img} source={require("./assets/FrontEnd.jpg")}/>
    <Text style={style.subTitulo}> Analista de DevOps</Text>
    <Image style={style.img} source={require("./assets/devops.png")}/>
    </View>
    
</ScrollView>

  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    background: "#307820"

  
  },
  titulo:{
    marginTop:30,
    marginBotton:30,
    fontSize:30,
    color:"#949201"
  },
  img:{
    width:250,
    height:200,
  borderRadius:20,
  marginBotton:20

  },
  subTitulo:{
    fontSize:20

  }

})
