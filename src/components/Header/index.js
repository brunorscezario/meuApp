import React from 'react' //header poderia criar lá, mas pode usar em diversos locais, separar o componente, um arquivo separado, um trecho de código que será responsável apenas pelo header

import {
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'

const statusBarHeight = StatusBar.currentHeight;


export default function Header(){
    return(
        <View style={styles.container}>
            <Text>Header do app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
    }
})