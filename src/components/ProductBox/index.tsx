import React from "react";
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

export function ProductBox({ data } : props){
    const newImage = data.image.replace(".com", ".com.br")
    return(
        <Container>
            <ProductImage source={{uri: newImage}}/>
            <ProductInformation>
                <ProductStock>remaning {data.stock} items</ProductStock>
                <ProductName>{data.name}</ProductName>
                <ProductValue>$ {data.price}</ProductValue>
            </ProductInformation>
            <AddProduct name="plussquare"/>
        </Container>
    );
}