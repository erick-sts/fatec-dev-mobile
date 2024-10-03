import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Switch,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sexo: ["Masculino", "Feminino"],
      selectedSexo: "Masculino",
      valor: 0,
      status: false,
    };
  }

  criarConta = () => {
    const { nome, selectedSexo, valor, status } = this.state;

    alert(
      `Conta Criada com Sucesso\nNome: ${nome}\nSexo: ${selectedSexo}\nLimite: R$ ${valor.toFixed(
        1
      )}\nEstado Civil: ${status ? "Casado" : "Solteiro"}`
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={(nome) => this.setState({ nome })}
        />

        <Picker
          selectedValue={this.state.selectedSexo}
          style={styles.picker}
          onValueChange={(itemValue) =>
            this.setState({ selectedSexo: itemValue })
          }
        >
          {this.state.sexo.map((sexo, index) => (
            <Picker.Item key={index} label={sexo} value={sexo} />
          ))}
        </Picker>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={5000}
          onValueChange={(valorSelecionado) =>
            this.setState({ valor: valorSelecionado })
          }
          value={this.state.valor}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#0000ff"
          thumbTintColor="#000000"
        />

        <Text style={styles.limiteText}>
          Seu limite é R$ {this.state.valor.toFixed(1)}
        </Text>

        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch) =>
            this.setState({ status: valorSwitch })
          }
          thumbColor="#FF0000"
        />

        <Text style={{ textAlign: "center", fontSize: 20, margin: 10 }}>
          {this.state.status ? "Casado (a)" : "Solteiro(a)"}
        </Text>

        <Button
          style={styles.button}
          title="Criar Conta"
          onPress={this.criarConta}
        />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    padding: 5,
    marginTop: 20,
    width: "50%",
    margin: 2,
  },
  picker: {
    height: 50,
    width: "20%",
    marginTop: 20,
  },
  slider: {
    width: "60%",
    height: 40,
    marginTop: 20,
    padding: 5,
    marginBottom: "5px",
  },
  limiteText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
