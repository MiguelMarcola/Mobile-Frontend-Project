import React from "react";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import LogoImage from "../../assets/logo.svg"
import { 
    Header, 
    IconMenu,
    IconCart,
    UserImage
} from "./styles";

export function Menu(){
    return(
        <Header>
            <IconMenu name="menu"/>
            <LogoImage 
                width={RFValue(98)} 
                height={RFValue(58)}
            />
            <IconCart name="cart-arrow-down" />
            <UserImage source={{uri: 'https://avatars.githubusercontent.com/u/95949825?v=4'}}/>
        </Header>
    );
}

