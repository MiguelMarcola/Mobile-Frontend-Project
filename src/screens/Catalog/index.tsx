import React from "react";
import { Menu } from "../../components/Menu";
import { ProductBox, ProductProps } from "../../components/ProductBox";
import { Container, ProductList } from "./styles";

export interface DatalistPropos extends ProductProps {
    id: string;
}

export function Catalog(){
    const data: DatalistPropos[] = [
        {
            id: "1",
            url: "http://lorempixel.com.br/640/480/transport",
            stock: 91260,
            name: "Sleek Wooden Soapeek Wooden Soapeek Wooden",
            value: 5
        },
        {
            id: "2",
            url: "http://lorempixel.com.br/640/480/transport",
            stock: 91260,
            name: "Sleek Wooden",
            value: 5
        },
        {
            id: "3",
            url: "http://lorempixel.com.br/640/480/transport",
            stock: 91260,
            name: "Sleek Wooden Soap",
            value: 5
        },
        {
            id: "4",
            url: "http://lorempixel.com.br/640/480/transport",
            stock: 91260,
            name: "Sleek Wooden Soap",
            value: 5
        },
        {
            id: "5",
            url: "http://lorempixel.com.br/640/480/transport",
            stock: 91260,
            name: "Sleek Wooden Soap",
            value: 5
        },
        {
            id: "6",
            url: "http://lorempixel.com.br/640/480/transport",
            stock: 91260,
            name: "Sleek Wooden Soap",
            value: 5
        }
    ]

    return(
        <Container>
            <Menu />
            <ProductList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductBox data={item} />}
            />
        </Container>
    );
}