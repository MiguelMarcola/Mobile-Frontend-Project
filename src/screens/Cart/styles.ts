import { FlatList, FlatListProps } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { CartProductsProps } from "./";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Footer = styled.View`
    margin: ${RFValue(10)}px ${RFValue(20)}px;
`;

export const BuyProducts = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${RFValue(11)}px;
    margin-top: ${RFValue(21)}px;
    border-radius: 4px;
    margin-bottom: ${getBottomSpace()}px;
`;


export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.shape};
    text-align: center;
`;

export const ListCartProduct = styled(
    FlatList as new (propos: FlatListProps<CartProductsProps>) => FlatList<CartProductsProps>
    ).attrs({
    showsVerticalScrollIndicator: false,
})``;
