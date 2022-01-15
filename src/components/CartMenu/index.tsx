import React from "react";
import LogoImage from "../../assets/logo.svg"
import { RFValue } from "react-native-responsive-fontsize";
import {
    Container,
    Icon,
    Title
} from "./styles"

export function CartMenu(){
    return(
        <Container>
            <Icon name="arrowleft" />
            <Title>Your chart</Title>
            <LogoImage 
                width={RFValue(97)} 
                height={RFValue(53)}
            />
        </Container>        
    );
}