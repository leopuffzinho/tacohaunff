import { StyleSheet,Image, Text, View } from "react-native";



export default function CupomLista({nome, imagem}) {
    return(
        <View style={css.container} elevation={4}>
            <Text style={css.nome}>{nome}</Text>
            <Image style={css.imagem} source={imagem} />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "90%",
        height: 250,
        flex: 1,
        top: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 30
    },
    nome: {
        marginBottom: 15,
        fontSize: 20,
    },
    imagem: {
        zIndex: -1
    }
})
