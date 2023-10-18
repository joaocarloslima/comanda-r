import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardProduto({ produto }) {
    
    return (
        <View style={styles.pedidos}>

            <View style={styles.cardProduto}>
                <Image style={styles.thumb} source={{ uri: produto.imagePath }} />

                <View style={styles.produtoData}>
                    <Text>{produto.nome}</Text>
                    <Text style={styles.price}>R$ {produto.preco.toFixed(2)}</Text>
                </View>

                <View style={styles.spinner}>
                    <TouchableOpacity >
                        <Text style={styles.spinnerMinus}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.spinnerValue}>0</Text>
                    <TouchableOpacity >
                        <Text style={styles.spinnerPlus}>+</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    box: {
        borderColor: '#121A2C',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
      },
      pedidos: {
        width: '100%',
      },
      pedidoData:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      pedidoDataTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
      },
      cardProduto: {
        borderColor: '#121A2C55',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
      },
      produtoData: {
        flex: 1,
        alignSelf: 'flex-start',
      },  
      thumb: {
        width: 50,
        height: 50,
        borderRadius: 4,
      },
      price: {
        color: '#29A035',
        fontSize: 18,
      },
      spinner: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        borderRadius: 999,
      },
      spinnerMinus: {
        textAlign: 'center',
        backgroundColor: '#E9E9E9',
        borderRadius: 999,
        width: 24,
        height: 24,
        lineHeight: 24,
        fontWeight: 'bold',
      },
      spinnerPlus: {
        textAlign: 'center',
        backgroundColor: '#121A2C',
        borderRadius: 999,
        width: 24,
        height: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        color: '#FFF',
      },
      spinnerValue: {
        textAlign: 'center',
        width: 24,
        height: 24,
        lineHeight: 24,
      },
      scroll: {
       width: '100%',
      }
    
    })