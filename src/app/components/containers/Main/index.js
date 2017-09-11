import React, { Component } from "react";
import { Clipboard, ScrollView, Slider, Switch, Text, ToastAndroid, ToolbarAndroid, TouchableNativeFeedback, View } from "react-native";
import styles from "./styles";

const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "$", "%", "@", "#"];
const alphaLower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
const alphaUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

class Main extends Component {
    constructor() {
        super();

        this.state = {
            settings: {
                alphaLower: true,
                alphaUpper: true,
                numeric: true,
                special: true,
                length: 12
            },
            value: ""
        };

        this._handleCopyPasswordButtonPress = this._handleCopyPasswordButtonPress.bind(this);
        this._handleGenerateButtonPress = this._handleGenerateButtonPress.bind(this);
        this._handleSliderChange = this._handleSliderChange.bind(this);
    }

    _generatePassword() {
        let password = "";
        const length = this.state.settings.length;
        const characterTypes = this._getActiveCharacterTypes();

        if (characterTypes.length < 1) {
            return password;
        } else {
            for (let i = 0; i < length; i++) {
                const randomCharacter = this._getRandomCharacter(characterTypes);
                password += randomCharacter;
            }

            return password;
        }
    }

    _getActiveCharacterTypes() {
        const allCharacterTypes = [
            { items: alphaLower, value: this.state.settings.alphaLower },
            { items: alphaUpper, value: this.state.settings.alphaUpper },
            { items: numeric, value: this.state.settings.numeric },
            { items: special, value: this.state.settings.special }
        ];

        return allCharacterTypes
            .filter(characterType => {
                return characterType.value;
            })
            .map(characterType => {
                return characterType.items;
            });
    }

    _getRandomCharacter(characterTypes) {
        const randomType = this._getRandomCharacterType(characterTypes);
        let randNum = Math.round(Math.random() * (randomType.length - 1));

        return randomType[randNum];
    }

    _getRandomCharacterType(characterTypes) {
        const randNum = Math.round(Math.random() * (characterTypes.length - 1));
        return characterTypes[randNum];
    }

    _handleCopyPasswordButtonPress() {
        Clipboard.setString(this.state.value);
        ToastAndroid.show("Copied to clipboard.", ToastAndroid.SHORT);
    }

    _handleGenerateButtonPress() {
        this._updatePassword();
    }

    _handleSliderChange(value) {
        this.setState(prevState => {
            return {
                settings: { ...prevState.settings, ...{ length: value } }
            };
        });
    }

    _handleSwitchChange(type) {
        this.setState(prevState => {
            return {
                settings: { ...prevState.settings, ...{ [type]: !prevState.settings[type] } }
            };
        });
    }

    _setPassword(value) {
        this.setState({
            value: value
        });
    }

    _updatePassword() {
        const password = this._generatePassword();
        this._setPassword(password);
    }

    componentWillMount() {
        this._updatePassword();
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid style={styles.toolbar} title="Password Generator" titleColor="#fff" elevation={5} />
                <ScrollView>
                    <View style={styles.contentContainer}>
                        <Text style={styles.headlineText}>
                            Use the Password Generator to instantly create a safe, random, secure password.
                        </Text>
                        <View style={styles.passwordContainer}>
                            <Text style={styles.passwordValue} numberOfLines={1} selectable={true}>
                                {this.state.value}
                            </Text>
                        </View>
                        <Text style={styles.copyPasswordButton} onPress={this._handleCopyPasswordButtonPress}>
                            Copy Password
                        </Text>
                        <View style={styles.generateButton} elevation={3}>
                            <TouchableNativeFeedback
                                onPress={this._handleGenerateButtonPress}
                                background={TouchableNativeFeedback.Ripple("ThemeAttrAndroid", true)}>
                                <View>
                                    <Text style={styles.generateText}>Generate</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.sliderContainer}>
                            <Text style={styles.sliderText}>Password Length: {this.state.settings.length}</Text>
                            <Slider
                                style={styles.slider}
                                minimumValue={1}
                                maximumValue={30}
                                thumbTintColor={"#009688"}
                                step={1}
                                value={this.state.settings.length}
                                onSlidingComplete={this._handleSliderChange}
                            />
                        </View>
                        <View style={styles.togglesContainer}>
                            <View style={styles.toggleRow}>
                                <View style={styles.toggleContainer}>
                                    <Text style={styles.toggleLabel}>A-Z</Text>
                                    <Switch
                                        onValueChange={() => this._handleSwitchChange("alphaUpper")}
                                        value={this.state.settings.alphaUpper}
                                    />
                                </View>
                                <View style={styles.toggleContainer}>
                                    <Text style={styles.toggleLabel}>a-z</Text>
                                    <Switch
                                        onValueChange={() => this._handleSwitchChange("alphaLower")}
                                        value={this.state.settings.alphaLower}
                                    />
                                </View>
                            </View>
                            <View style={styles.toggleRow}>
                                <View style={styles.toggleContainer}>
                                    <Text style={styles.toggleLabel}>0-9</Text>
                                    <Switch onValueChange={() => this._handleSwitchChange("numeric")} value={this.state.settings.numeric} />
                                </View>
                                <View style={styles.toggleContainer}>
                                    <Text style={styles.toggleLabel}>!$%@#</Text>
                                    <Switch onValueChange={() => this._handleSwitchChange("special")} value={this.state.settings.special} />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Main;
