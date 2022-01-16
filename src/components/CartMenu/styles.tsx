import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons"
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${getStatusBarHeight() + RFValue(31)}px ${RFValue(20)}px ${RFValue(30)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled(AntDesign)`
    font-size: ${RFValue(30)}px;
    margin-right: ${RFValue(24)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(24)}px;
    margin-right: ${RFValue(20)}px;
`;
