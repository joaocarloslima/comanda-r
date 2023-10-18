import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

export default function Comanda({navigation}){
    return(
        <View style={styles.container}>

            <View>
                <Text>Olá,</Text>
                <Text>João Carlos</Text>
            </View>

            <View>
                <Input />
                <Button onPress={() => navigation.navigate("Produtos")}>confirmar</Button>
            </View>

            <Text>
                Digite o código da comanda 
                para iniciar um pedido
            </Text>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFBFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
})