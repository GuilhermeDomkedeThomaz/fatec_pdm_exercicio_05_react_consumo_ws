import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Keyboard } from 'react-native';
import InfosItem from './components/InfosItem';

export default function App() {
  const primeiroEndPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=";
  const segundoEndPoint = "https://api.openweathermap.org/data/2.5/onecall?lat="
  const apiKey = "d57b5072a257f5f5e2b5c772f44f1f62";
  const [cidade, setCidade] = useState('');
  const [infos, setInfos] = useState([]);
  const [nascerDoSol, setNascerDoSol] = useState('');
  const [porDoSol, setPorDoSol] = useState('');

  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }
  
  async function obtemLatitudeLongitude() {
    const target = primeiroEndPoint + cidade + "&appid=" + apiKey;
    let response = await fetch(target);
    let body = await response.json();
    Keyboard.dismiss();
    obtemInfos(body.city.coord.lat, body.city.coord.lon);
  }

  async function obtemInfos(latitude, longitude) {
    setInfos([]);
    const target = segundoEndPoint + latitude + "&lon=" + longitude + "&exclude=minutely,daily&appid=" + apiKey;
    fetch(target)
    .then((dados) => dados.json())
    .then((dados) => {
      setInfos(dados["hourly"]);
      setNascerDoSol(dados.current.sunrise);
      setPorDoSol(dados.current.sunset);
      Keyboard.dismiss();
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button title="Ok"
          onPress={obtemLatitudeLongitude}
        />
      </View>
      <FlatList
        data={infos}
        renderItem={
          info => (
            <InfosItem
              info={info}
              sunrise={nascerDoSol}
              sunset={porDoSol}
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
  },
  nomeCidade: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  }
});
