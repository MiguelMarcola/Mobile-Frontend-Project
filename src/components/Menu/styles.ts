import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    padding: ${getStatusBarHeight() + RFValue(31)}px ${RFValue(25)}px ${RFValue(20)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserImage = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 50px;
`;
