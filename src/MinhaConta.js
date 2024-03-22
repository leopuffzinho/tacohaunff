import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function MinhaConta() {

    const [haunff, setHaunff] = useState(false);
    const [ajuda, setAjuda] = useState(false);
    return (
        <View style={css.container}>
            <View style={css.imagem}>
                <Image source={require("../assets/qrcod.png")} />
            </View>

            <View style={css.mconta}>
                <Icon style={css.icones} name="user" size={23} color="black" /><Text>Usuário</Text>
            </View>

            <View style={css.mconta}>
                <Icon style={css.icones} name="tags" size={23} color="black" /><Text>Meus Cupons</Text>
            </View>

            <View style={css.mconta}>
                <Icon style={css.icones} name="shopping-bag" size={23} color="black" /><Text>Meus Pedidos</Text>
            </View>

            <View style={css.mconta}>
                <Icon style={css.icones} name="cog" size={23} color="black" /><Text>Configurações</Text>
            </View>

            <Pressable style={css.mcontaDistante} onPress={() => setHaunff((current) => !current)} >
                <Text style={css.contanegrito}>HAUNFF</Text><Icon style={css.icones2} name={(haunff) ? "chevron-down" : "chevron-right"} size={23} color="black" />
            </Pressable>
            {haunff &&
                <>
                    <View style={css.mconta}>
                        <Icon style={css.icones} name="header" size={23} color="black" /><Text>Quem somos</Text>
                    </View>

                    <View style={css.mconta}>
                        <Icon style={css.icones} name="product-hunt" size={23} color="black" /><Text>Produtos</Text>
                    </View>
                </>
            }
            <Pressable style={css.mcontaDistante} onPress={() => setAjuda((current) => !current)}>
                <Text style={css.contanegrito}>AJUDA</Text><Icon style={css.icones2} name={(ajuda) ? "chevron-down" : "chevron-right"} size={23} color="black" />
            </Pressable>

            {ajuda &&

                <View style={css.mconta}>
                    <Icon style={css.icones} name="question-circle-o" size={23} color="black" /><Text>Perguntas frequentes</Text>
                </View>
            }
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "90%",
        display: "flex",
        alignSelf: "center"
    },
    imagem: {
        width: "95%",
        height: 250,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 40,
    },
    mconta: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20
    },
    mcontaDistante: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    contanegrito: {
        fontWeight: "bold",
        fontSize: 17,
    },
    icones: {
        fontSize: 18,
        marginRight: 10

    },
    icones2: {
        fontSize: 18,
    }
})
