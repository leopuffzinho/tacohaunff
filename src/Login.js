import React, { useState } from 'react'
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Cadastro from './Cadastro';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { BounceOut } from 'react-native-reanimated';

export default function Login({setLogado, setCadastro}) {
  
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[checkbox, setCheckBox] = useState(false);


    function Login()
    {
        Keyboard.dismiss();
        if(email == "leo@leo" && senha == "123")
            setLogado(true);
    }

    function Cadastrar() {
        setLogado(true);
        setCadastro(true);
    }

    return (
    <View style={css.View}>
        <View style={css.header}></View>
        <View style={css.welcome}>
            <Text style={css.welcomeText}>SEJA BEM-VINDO AO</Text>
        </View>
        <View style={css.img}>
        <Image source={require('../assets/haunff.png')} />
        </View>
        <View style={css.inputBox}>
            <Text style={css.textsenhaemail}>Email</Text>
            <TextInput 
                onChangeText={(digitado) => setEmail(digitado)}
                value={email}
                placeholder='exemple@gmail.com'
                style={css.inputs}
            />
        </View>
        <View style={css.inputBox}>
            <Text style={css.textsenhaemail}>Senha</Text>
            <TextInput 
                onChangeText={(digitado) => setSenha(digitado)}
                value={senha}
                placeholder='*******'
                style={css.inputs}
            />
        </View>        
        <TouchableOpacity onPress={Login} style={css.btn}>
            <Text style={css.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={css.flex}>
            <BouncyCheckbox onPress={ (isChecked) => {} } size={25} text="Relembrar Senha"  fillColor="#8B6901"  />
            <View>
            <Text style={css.textesqueceu}>Esqueceu a senha?</Text>
            </View>
        </View>
        <View style={css.boxBottom}>
            <TouchableOpacity onPress={Cadastrar} style={css.btnSmall}>
                <Text style={css.btnText}>CADASTRAR</Text>
            </TouchableOpacity>
            <Text style={css.textBottom}>Não tem conta? Faça uma agora mesmo</Text>
        </View>
        

    </View>
  )
}

const css = StyleSheet.create( {
    View: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom:20
    },
    header: {
        width: "100%",
        height: 100,
        position: "absolute",
        top: 0,
        backgroundColor: "#d6b44b",
    },
    welcome: {
        marginTop: 150
    },
    welcomeText: {
        fontSize: 27,
        color:"#8B6901"
    },
    inputBox: {
        width: "80%",
        marginTop: 20,
        color: "#8B6901"
    },
    inputs: {
        width: "100%",
        height: 55,
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        borderRadius: 5,
        marginTop: 15
    },
    btn: {
        width: "80%",
        height: 55,
        borderRadius: 5,
        marginTop: 30,
        backgroundColor: "#d6b44b",
        justifyContent: "center",
        color: "white",
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    flex: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    boxBottom: {
        width: "80%",
        marginTop: 50
    },
    btnSmall: {
        width: "50%",
        height: 55,
        borderRadius: 5,
        marginTop: 70,
        backgroundColor: "#d6b44b",
        justifyContent: "center",
        color: "white",
        alignSelf: "center",
        marginBottom: 5
    },
    textBottom: {
        textAlign: "center"
    },
    textesqueceu: {
        color:"#8B6901",
    },
    textsenhaemail: {
        color:"#8B6901",
    },
    img: {
        height: 100,
    }

})