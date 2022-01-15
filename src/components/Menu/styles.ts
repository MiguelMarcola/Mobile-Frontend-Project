import styled from "styled-components/native";
import { Feather, FontAwesome5  } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    padding: ${getStatusBarHeight() + RFValue(31)}px ${RFValue(20)}px ${RFValue(40)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const IconMenu = styled(Feather)`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(30)}px;
    margin-right: ${RFValue(50)}px; 
`;
export const IconCart = styled(FontAwesome5)`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(30)}px;
`;

export const UserImage = styled.Image`
    width: ${RFValue(42)}px;
    height: ${RFValue(42)}px;
    border-radius: 50px;
`;
