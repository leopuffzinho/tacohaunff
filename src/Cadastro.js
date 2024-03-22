import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text } from 'react-native';
import { TextInput, TouchableOpacity, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function Cadastro({ setLogado, setCadastro }) {

    const[email, setEmail] = useState("");
    const[nome, setNome] = useState("");
    const[senha, setSenha] = useState("");
    const[checkbox, setCheckBox] = useState(false);
    
    function Cadastrar()
    {
        setCadastro(false);
        setLogado(false);
    }

    function Voltar () 
    {
        setCadastro(false);
        setLogado(false);
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
        <Text style={css.textsenhaemailnome}>Nome</Text>
            <TextInput 
                onChangeText={(digitado) => setNome(digitado)}
                value={nome}
                placeholder='Seu Nome'
                style={css.inputs}
            />
        </View>
        <View style={css.inputBox}>
            <Text style={css.textsenhaemailnome}>Email</Text>
            <TextInput 
                onChangeText={(digitado) => setEmail(digitado)}
                value={email}
                placeholder='exemple@gmail.com'
                style={css.inputs}
            />
        </View>
        <View style={css.inputBox}>
            <Text style={css.textsenhaemailnome}>Senha</Text>
            <TextInput 
                onChangeText={(digitado) => setSenha(digitado)}
                value={senha}
                placeholder='*******'
                style={css.inputs}
            />
        </View>        
        <TouchableOpacity onPress={Cadastrar} style={css.btn}>
            <Text style={css.btnText}>CADASTRAR</Text>
        </TouchableOpacity>
        <View style={css.flex}>
            <BouncyCheckbox onPress={ (isChecked) => {} } size={25} text="Relembrar Senha"  fillColor="#8B6901"  />
        </View>
        <TouchableOpacity onPress={Voltar} style={css.btnSmall}>
                <Text style={css.btnText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={css.textBottom}>Já tem uma conta? Entre agora</Text>
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
        marginTop: 50,
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
    textsenhaemailnome: {
        color:"#8B6901",
    },
    img: {
        height: 75,
    }

})