import React from "react";
import LogoImage from "../../assets/logo.svg"
import { RFValue } from "react-native-responsive-fontsize";
import {
    Container,
    Title
} from "./styles"

export function CartMenu(){
    return(
        <Container>
            <Title>Your chart</Title>
            <LogoImage 
                width={RFValue(97)} 
                height={RFValue(53)}
            />
        </Container>        
    );
}