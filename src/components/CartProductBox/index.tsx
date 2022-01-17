import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Container,
    ProductImage,
    ProductInformation,
    ProductStock,
    ProductName,
    ProductValue,
    ProductControl,
    Icon,
    Total
} from "./styles"

import { CartProductsProps } from "../../screens/Cart";
import { Alert, TouchableOpacity } from "react-native";

interface props {
    data: CartProductsProps
}

const dataKey = "@frontproject:transactions";

export function CartProductBox({data} : props){
    const [totItems, setTotItems] = useState(data.quantity)

    async function handleAddCart(id: String){
        try {
            const response = await AsyncStorage.getItem(dataKey)
            const products = response ? JSON.parse(response!) : [];
            const objIndex = products.findIndex((data: CartProductsProps) => data.id === id);
            
            if(objIndex !== -1){
                products[objIndex].quantity++;
                await AsyncStorage.setItem(dataKey, JSON.stringify(products));
                setTotItems(totItems + 1)
            }
            
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar");
        }
        
    }

    async function handleDecreaseCart(id: String){
        try {
            const response = await AsyncStorage.getItem(dataKey)
            const products = response ? JSON.parse(response!) : [];
            const objIndex = products.findIndex((data: CartProductsProps) => data.id === id);
            
            if(objIndex !== -1){
                products[objIndex].quantity--;
                products[objIndex].quantity === 0 ? products.splice(objIndex, 1) : objIndex;
                await AsyncStorage.setItem(dataKey, JSON.stringify(products));
                totItems !== 1 && totItems !==0 ? setTotItems(totItems -1) : setTotItems(0);
            }
            
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar");
        }
        
    }
    return(
        <Container>
            <ProductImage source={{uri: data.image}}/>
            <ProductInformation>
                <ProductStock>remaning {data.stock} items</ProductStock>
                <ProductName>{data.name}</ProductName>
                <ProductValue>$</ProductValue>
            </ProductInformation>
            <ProductControl>

                <TouchableOpacity
                    onPress={() => handleAddCart(data.id)}
                >
                    <Icon name="plussquare"/>
                </TouchableOpacity>

                <Total>{totItems}</Total>

                <TouchableOpacity
                    onPress={() => handleDecreaseCart(data.id)}
                >
                    <Icon name="minussquare"/>
                </TouchableOpacity>

            </ProductControl>
        </Container>
    );
}