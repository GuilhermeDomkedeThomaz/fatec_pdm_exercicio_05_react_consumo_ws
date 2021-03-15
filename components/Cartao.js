import React from'react';
import { StyleSheet, View } from'react-native';

const Cartao = (props) => {
    return (
        <View style={{ ...styles.cartao, ...props.estilos }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    cartao: {
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
        backgroundColor: 'white',
        elevation: 4,
        padding: 12,
        borderRadius: 12
    }
});

export default Cartao;
