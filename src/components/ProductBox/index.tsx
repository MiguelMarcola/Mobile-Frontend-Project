import React, { useEffect } from "react";
import { Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductDTO } from "../../dtos/ProductDTO";

import {
    Container,
    ProductImage,
    ProductInformation,
    ProductStock,
    ProductName,
    ProductValue,
    AddProduct,
} from "./styles"

interface props {
    data: ProductDTO
}

interface productProps {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    quantity: number;
}


export function ProductBox({ data } : props){
    const dataKey = "@frontproject:transactions";
    const newImage = data.image.replace(".com", ".com.br")
    async function handleAddProduct(){
        const productData: productProps = {
            id: data.id,
            name: data.name,
            price: data.price,
            stock: data.stock,
            image: newImage,
            quantity: 1
        }

        try {
            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];

            const objIndex = currentData.findIndex((data: productProps) => data.id === productData.id);
            
            if(objIndex === -1){
                const dataFomatted = [
                    ...currentData,
                    productData
                ]
                await AsyncStorage.setItem(dataKey, JSON.stringify(dataFomatted));
            }else{
                currentData[objIndex].quantity++;
                await AsyncStorage.setItem(dataKey, JSON.stringify(currentData));
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar");
        }
    }


    return(
        <Container>
            <ProductImage source={{uri: newImage}}/>
            <ProductInformation>
                <ProductStock>remaning {data.stock} items</ProductStock>
                <ProductName>{data.name}</ProductName>
                <ProductValue>$ {data.price}</ProductValue>
            </ProductInformation>
            <TouchableOpacity onPress={handleAddProduct}>
                <AddProduct name="plussquare"/>
            </TouchableOpacity>
        </Container>
    );
}