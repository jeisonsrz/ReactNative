import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import Header from "./components/Header";
import Body from "./components/Body";
import linq from "linq";

export default class App extends React.Component {
  state = {
    titulo: "App de listas en Creatic 2",
    tareas: [],
    tarea: ""
  };

  managerTextTarea = value =>{
    this.setState({tarea: value});
    console.log("Akgo ocurre aqui:", this.state.tarea);
  };agregarTarea = () => {
    console.log("Funcion para Agregar Tarea");
    const nuevasTareas = [
      ...this.state.tareas,
      { nombre: this.state.tarea, key: Date.now() }
    ];
    this.saveInStorage(nuevasTareas);
    this.setState({ tareas: nuevasTareas, tarea: "" });
  };
  eliminarTarea = key => {
    console.log("Elemento a eliminar", key);
    const nuevasTareas = linq
      .from(this.state.tareas)
      .where(`$.key !== ${key}`)
      .toArray();

    this.setState({ tareas: nuevasTareas });
    this.saveInStorage(nuevasTareas);
  };

  saveInStorage = tareas => {
    AsyncStorage.setItem("@AppCreatic:tareas", JSON.stringify(tareas))
      .then(valor => {
        console.log(valor);
      })
      .catch(error => {
        console.log(error);
      });
  };
  getDataStorage = () => {
    AsyncStorage.getItem("@AppCreatic:tareas")
      .then(valor => {
        console.log(valor);
        const nuevasTareas = JSON.parse(valor);
        if (nuevasTareas) {
          this.setState({ tareas: nuevasTareas });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getDataStorage();
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          eventoTextAdd={this.managerTextTarea}
          agregar={this.agregarTarea}
          titulo={this.state.titulo}
        />
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaff00"
  },

  rojo: {
    color: "red"
  }
});
