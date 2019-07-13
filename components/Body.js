import React, { Component } from 'react'
import { StyleSheet, Text, View , FlatList } from 'react-native';
import Tarea from "./Tarea"

class Body extends Component {
    render() {
        return (
          <View style={styles.container}>
            <FlatList
              data={this.props.tareas}
              renderItem={elemento => {
                return (
                  <Tarea
                    tareaU={elemento.item}
                    key={elemento.item.key}
                    tarea={elemento.item.nombre}
                    eliminar={() => {
                      this.props.eliminar(elemento.item.key);
                    }}
                  />
                );
              }}
            />
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 9,
        backgroundColor: "#ff9800"
      }
    });
    
    export default Body;
    