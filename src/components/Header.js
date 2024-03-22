import { Image, StyleSheet, View, Text, Pressable } from 'react-native';


export default function Header({ texto, cor, sacola, voltar }) {

    return (
        <View style={[css.header, { backgroundColor: (cor) ? cor : "#D6B44B" }]}>
            {voltar &&
                <Pressable>
                    <Text>Voltar</Text>
                </Pressable>
            }
            {texto ?
                <Text>{texto}</Text> :
                <Image style={css.logo} source={require("../../assets/logotaco.png")} />
            }
            {sacola && <Image />}
        </View>
    )
}

const css = StyleSheet.create({
    header: {
        width: "100%",
        height: 115,
        top: 0,
        left: 0,
        zIndex: 99
    },
    logo: {
        top: 50,
        width: "100%",
        height: "105%",
        resizeMode: "contain",
        zIndex: 99
    }
})