import React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableNativeFeedback, Clipboard, ToastAndroid } from "react-native";
import generatePassword from "./passwordGenerator";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            passwordValue: ""
        };

        this._handleCopyPasswordButtonPress = this._handleCopyPasswordButtonPress.bind(this);
        this._handleGenerateButtonPress = this._handleGenerateButtonPress.bind(this);
    }

    _changePasswordValue() {
        const passwordValue = this._generatePassword();
        this._setPassword(passwordValue);
    }

    _generatePassword() {
        const passwordLength = 12;
        return generatePassword(passwordLength);
    }

    _handleCopyPasswordButtonPress() {
        Clipboard.setString(this.state.passwordValue);
        ToastAndroid.show("Copied to clipboard.", ToastAndroid.SHORT);
    }

    _handleGenerateButtonPress() {
        this._changePasswordValue();
    }

    _setPassword(passwordValue) {
        this.setState({
            passwordValue
        });
    }

    componentDidMount() {
        this._changePasswordValue();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} elevation={5}>
                    <Text style={styles.headerTitle}>Password Generator</Text>
                </View>
                <ScrollView>
                    <View style={styles.contentContainer}>
                        <Text style={styles.headlineText}>Use the Password Generator to instantly create a safe, secure password.</Text>
                        <View style={styles.passwordContainer}>
                            <Text style={styles.passwordValue} selectable={true}>
                                {this.state.passwordValue}
                            </Text>
                        </View>
                        <Text style={styles.copyPasswordButton} onPress={this._handleCopyPasswordButtonPress}>
                            Copy Password
                        </Text>
                        <View style={styles.generateButton}>
                            <TouchableNativeFeedback
                                onPress={this._handleGenerateButtonPress}
                                background={TouchableNativeFeedback.Ripple("ThemeAttrAndroid", true)}>
                                <View>
                                    <Text style={styles.generateText}>Generate</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6f6"
    },
    header: {
        backgroundColor: "#4caf50",
        height: 80
    },
    headerTitle: {
        position: "absolute",
        bottom: 18,
        left: 16,
        color: "#fff",
        fontSize: 22
    },
    contentContainer: {
        flex: 1,
        alignItems: "center"
    },
    headlineText: {
        fontSize: 20,
        margin: 40,
        marginTop: 50,
        marginBottom: 35,
        color: "#6c6c6c",
        textAlign: "center"
    },
    passwordContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        width: "90%",
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#999",
        borderStyle: "solid",
        height: 62,
        backgroundColor: "#fff"
    },
    passwordValue: {
        fontSize: 26,
        color: "#5c5c5c",
        fontWeight: "600"
    },
    copyPasswordButton: {
        padding: 16,
        marginTop: 4,
        color: "#2196f3",
        textDecorationLine: "underline"
    },
    generateButton: {
        flex: 1,
        marginTop: 12,
        marginBottom: 40,
        backgroundColor: "#c62828",
        borderRadius: 30
    },
    generateText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 40,
        paddingLeft: 40
    }
});
