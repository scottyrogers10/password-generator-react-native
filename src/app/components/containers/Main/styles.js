import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    toolbar: {
        backgroundColor: "#009688",
        height: 56
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
        fontWeight: "600",
        marginLeft: 10,
        marginRight: 10
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
        marginBottom: 25,
        backgroundColor: "#c62828",
        borderRadius: 30
    },
    generateText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 55,
        paddingLeft: 55
    },
    togglesContainer: {
        width: "70%",
        justifyContent: "flex-start"
    },
    toggleRow: {
        marginBottom: 18,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    toggleContainer: {
        flexDirection: "row"
    },
    toggleLabel: {
        fontSize: 17,
        marginRight: 18,
        paddingTop: 2,
        color: "#6c6c6c"
    },
    sliderContainer: {
        width: "70%",
        marginBottom: 20,
        alignItems: "center"
    },
    sliderText: {
        fontSize: 17,
        paddingBottom: 14,
        color: "#6c6c6c"
    },
    slider: {
        width: "100%"
    }
});
