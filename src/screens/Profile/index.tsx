import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import LogoImage from "../../assets/logo.svg"
import LivenImage from "../../assets/liven.svg"
import { 
    Container,
    UserImage,
    Email,
    Title
} from './styles'

export function Profile(){
    return (
        <Container>
            <LogoImage 
                    width={RFValue(200)} 
                    height={RFValue(135)}
            />
            <UserImage source={{uri: 'https://avatars.githubusercontent.com/u/95949825?v=4'}}/>
            <Email>miguelmarcola@gmail.com</Email>
            <Title>Projeto de avaliação técnica Frontend</Title>
            <LivenImage 
                    width={RFValue(97)} 
                    height={RFValue(53)}
            />
        </Container>
    );
}