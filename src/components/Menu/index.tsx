import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import LogoImage from "../../assets/logo.svg"
import { 
    Header, 
    UserImage
} from "./styles";

export function Menu(){
    return(
        <Header>
            <LogoImage 
                width={RFValue(98)} 
                height={RFValue(58)}
            />
            <UserImage source={{uri: 'https://avatars.githubusercontent.com/u/95949825?v=4'}}/>
        </Header>
    );
}

