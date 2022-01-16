import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: ${RFValue(100)}px 0;
`;

export const UserImage = styled.Image`
    width: ${RFValue(85)}px;
    height: ${RFValue(85)}px;
    border-radius: 50px;
`;

export const Email = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    text-decoration: underline;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    text-align: center;
`;
