import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { CartMenu } from "../../components/CartMenu";
import { CartProductBox } from "../../components/CartProductBox";
import { 
    Container, 
    ListCartProduct,
    Footer,
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
    const [cartItems, setCartItems] = useState<CartProductsProps[]>([])
    const [refresh, setRefresh] = useState(0)

    const dataKey = "@frontproject:transactions";
    
    async function loadData(){
        const response = await AsyncStorage.getItem(dataKey)
        const products = response ? JSON.parse(response!) : [];
        setCartItems(products);
    }

    async function deleteCart(){
        await AsyncStorage.removeItem(dataKey)
        setRefresh(refresh + 1)
    }

    async function refreshCart(){
        await setRefresh(refresh + 1)
    }

    useEffect(() => { 
        loadData();
    },[refresh]);

    return(
        <Container>
            <CartMenu />
            <ListCartProduct
                data={cartItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CartProductBox data={item} />}
            />
            <Footer>
            <BuyProducts
                    activeOpacity={.5}
                    onPress={refreshCart}
                >
                    <TextButton>Refresh</TextButton>
                </BuyProducts>
                <BuyProducts
                    activeOpacity={.5}
                    onPress={deleteCart}
                >
                    <TextButton>Proceed to checkout</TextButton>
                </BuyProducts>
            </Footer>
        </Container>
    );
}