import React from "react";
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

interface props {
    data: CartProductsProps
}

export function CartProductBox({data}: props){
    return(
        <Container>
            <ProductImage source={{uri: data.image}}/>
            <ProductInformation>
                <ProductStock>remaning {data.stock} items</ProductStock>
                <ProductName>{data.name}</ProductName>
                <ProductValue>$ {(data.value * data.quantity).toFixed(2)}</ProductValue>
            </ProductInformation>
            <ProductControl>
                <Icon name="plussquare"/>
                <Total>{data.quantity}</Total>
                <Icon name="minussquare"/>
            </ProductControl>
        </Container>
    );
}