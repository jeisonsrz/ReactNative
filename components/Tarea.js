import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

export default class Tarea extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text> {this.props.tarea} </Text>
            <TouchableOpacity onPress={this.props.eliminar}>
              <Ionicons name="md-trash" size={24} color="#00ff18" />
            </TouchableOpacity>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
      }
    });