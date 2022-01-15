import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons"
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.shape};
    margin: ${RFValue(10)}px ${RFValue(20)}px;
    padding: ${RFValue(9)}px ${RFValue(22)}px ${RFValue(14)}px ${RFValue(10)}px;
    border-radius: 4px;
`;

export const ProductImage= styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(76)}px;
`;

export const ProductInformation = styled.View`
    flex: 1;
    flex-direction: column;
    margin-left: ${RFValue(10)}px;
`;
export const ProductStock = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(10)}px;
`;
export const ProductName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`;
export const ProductValue = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.primary};
`;
export const AddProduct = styled(AntDesign)`
    font-size: ${RFValue(33)}px;
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    right: ${RFValue(21)}px;
    bottom: ${RFValue(10)}px;
`;