import React from "react";

import {
    Container,
    ProductImage,
    ProductInformation,
    ProductStock,
    ProductName,
    ProductValue,
    AddProduct,
} from "./styles"

export interface ProductProps {
    url: string,
    stock: number,
    name: string,
    value: number
}

interface props {
    data: ProductProps
}

export function ProductBox({ data } : props){
    return(
        <Container>
            <ProductImage source={{uri: data.url}}/>
            <ProductInformation>
                <ProductStock>remaning {data.stock} items</ProductStock>
                <ProductName>{data.name}</ProductName>
                <ProductValue>$ {data.value}</ProductValue>
            </ProductInformation>
            <AddProduct name="plussquare"/>
        </Container>
    );
}