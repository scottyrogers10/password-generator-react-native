import React, { Component } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Main } from "./src/components";

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.screenContainer}>
                    <Main />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009688"
    },
    screenContainer: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        marginTop: StatusBar.currentHeight
    }
});

export default App;
