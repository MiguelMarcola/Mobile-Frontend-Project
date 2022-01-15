import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CartMenu } from "../../components/CartMenu";
import { CartProductBox } from "../../components/CartProductBox";
import { 
    Container, 
    ListCartProduct,
    Footer,
    CartTotal,
    TotalTitle,
    Total,
    BuyProducts, 
    TextButton
} from "./styles";

export interface CartProductsProps{
    id: string,
    quantity: number,
    image: string,
    name: string,
    stock: number,
    value: number,
}


export function Cart(){
    const [valorTotal, setValorTotal] = useState(0);
    useEffect(() => {
        let tot = 0
        data.forEach((data) => {
            tot = (tot + (data.value * data.quantity))
        })
        setValorTotal(tot)
    }, []);
    const data: CartProductsProps[] = [{
            id: "1",
            quantity: 1,
            image: "http://lorempixel.com.br/640/480/transport",
            name: "Sleek Wooden Soap",
            stock: 91260,
            value: 259.00,
        },
        {
            id: "2",
            quantity: 2,
            image: "http://lorempixel.com.br/640/480/transport",
            name: "Sleek Wooden Soap",
            stock: 91260,
            value: 259.00,
        },
        {
            id: "3",
            quantity: 2,
            image: "http://lorempixel.com.br/640/480/transport",
            name: "Sleek Wooden Soap",
            stock: 91260,
            value: 259.00,
        },
        {
            id: "4",
            quantity: 1,
            image: "http://lorempixel.com.br/640/480/transport",
            name: "Sleek Wooden Soap",
            stock: 91260,
            value: 259.00,
        },
        {
            id: "5",
            quantity: 2,
            image: "http://lorempixel.com.br/640/480/transport",
            name: "Sleek Wooden Soap",
            stock: 91260,
            value: 259.00,
        },
        {
            id: "6",
            quantity: 1,
            image: "http://lorempixel.com.br/640/480/transport",
            name: "Sleek Wooden Soap",
            stock: 91260,
            value: 259.00,
        }
    ]

    return(
        <Container>
            <CartMenu />
            <ListCartProduct
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CartProductBox data={item} />}
            />
            <Footer>
                <CartTotal>
                    <TotalTitle>Total: </TotalTitle>
                    <Total>${valorTotal.toFixed(2)}</Total> 
                </CartTotal>
                <BuyProducts>
                    <TextButton>Proceed to checkout</TextButton>
                </BuyProducts>
            </Footer>
        </Container>
    );
}