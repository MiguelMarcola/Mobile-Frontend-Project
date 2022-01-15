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
                const response = await api.get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product');
                setProducts(response.data);
            } catch (error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts()
    }, []);

    //const newProducts = products.map((products) => products.image.replaceAll(".com", ".com.br"))


   /* const data: DatalistPropos[] = [
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
    ]*/
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