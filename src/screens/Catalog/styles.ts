import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import { FlatList, FlatListProps  } from "react-native";
import { DatalistPropos } from ".";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const ProductList = styled(
    FlatList as new (propos: FlatListProps<DatalistPropos>) => FlatList<DatalistPropos>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle:{
        paddingBottom: getBottomSpace()
    }
})``;


