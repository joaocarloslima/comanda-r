import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TextInput, View } from 'react-native';

import CardProduto from '../components/card.js';
import { StyleSheet } from 'react-native';
import Button from '../components/button.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

const produto = {
    "id": 1,
    "nome": "Bolo de Chocolate",
    "imagePath": "https://img.freepik.com/free-photo/close-up-fancy-dessert_23-2150527565.jpg?t=st=1688655003~exp=1688658603~hmac=84829cbb20876216de8d7e408378e6b1c44686855c3d414865b445e20bb5f7b4&w=1380",
    "preco": 8
}

export default function Produtos() {
  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/produtos")
      .then(resp => setProdutos(resp.data))
  }, [])

    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back" size={24} color="black" />

                <View style={styles.box}>
                    <Text>comanda</Text>
                    <Text style={styles.title}>2457</Text>
                </View>
            </View>

            <View style={styles.pedidos}>
                <Text style={styles.subtitle}>Pedido</Text>
                <View style={styles.pedidoData}>
                    <Text>Saldo da comanda</Text>
                    <Text>R$ 0,00</Text>
                </View>
                <View style={styles.pedidoData}>
                    <Text>Total do pedido</Text>
                    <Text>R$ +20,00</Text>
                </View>
                <View style={styles.pedidoDataTotal}>
                    <Text>Saldo final</Text>
                    <Text>R$ 149,00</Text>
                </View>
            </View>

            <TextInput style={styles.input} placeholder="procurar" />

            <Text style={styles.subtitle}>Produtos</Text>

            <ScrollView style={styles.scroll}>
  
              { produtos.map(produto => 
                  <CardProduto key={produto.id} produto={produto} />) }

            </ScrollView>

            <Button>finalizar</Button>
            
        </View>

    )
}

const styles = StyleSheet.create({
  header:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  containerBetween: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
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