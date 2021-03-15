import React from'react';
import { StyleSheet, View, Text, Image} from'react-native';
import Cartao from './Cartao'

const InfosItem = (props) => {
    return (
        <Cartao estilos={styles.cartao}>
            <View style={styles.tela}>
                <Image style={styles.imagem}
                    source={{ uri: "https://openweathermap.org/img/wn/" + props.info.item.weather[0].icon + ".png" }}
                />
                <View>
                <View style={styles.primeiraLinha}>
                    <Text>{new Date(props.info.item.dt * 1000).toLocaleTimeString()} - Sensação térmica: {props.info.item.feels_like}</Text>
                </View>
                <View style={styles.segundaLinha}>
                    <Text style={styles.valor}>Nascer do sol: {new Date(props.sunrise * 1000).toLocaleTimeString()}</Text>
                    <Text style={styles.valor}>Por do sol: {new Date(props.sunset * 1000).toLocaleTimeString()}</Text>
                </View>
                </View>
            </View>
        </Cartao>
    );
}

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
});

export default InfosItem;
