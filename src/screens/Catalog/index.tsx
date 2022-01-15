import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Menu } from "../../components/Menu";
import { ProductBox } from "../../components/ProductBox";
import { ProductDTO } from "../../dtos/ProductDTO";
import { Container, ProductList } from "./styles";

export function Catalog(){
    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await api.get('/product');
                setProducts(response.data);
            } catch (error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts()
    }, []);

    return(
        <Container>
            <Menu />
            <ProductList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductBox data={item} />}
            />
        </Container>
    );
}