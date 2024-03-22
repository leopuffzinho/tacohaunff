import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CupomLista from "../components/CupomLista.js";
import Header from "./components/Header.js";


const produtoshome = [
    {
        id: 1,
        nome: "CUPOM",
        imagem: require("../assets/cupom.png")
    },
    {
        id: 2,
        nome: "DAY NACHOS",
        imagem: require("../assets/gameday.png")
    },
    {
        id: 3,
        nome: "CARTELA",
        imagem: require("../assets/loteacartela.png")
    },
    {
        id: 4,
        nome: "BRINQUEDOS",
        imagem: require("../assets/tacotoy.png")
    }
]



export default function Home() {

    return (
        <View>
            <Header />
            <FlatList
            data={produtoshome}
            renderItem={({ item }) => <CupomLista nome={item.nome} imagem={item.imagem} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 200 }}
        />
        </View>
        
    )
}

