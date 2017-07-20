const lowerLetters = [
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

const upperLetters = [
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

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const specialChars = ["!", "$", "%", "@", "#"];

const generatePassword = (length, characterTypes) => {
    let password = "";
    characterTypes = characterTypes || [lowerLetters, upperLetters, digits, specialChars];

    let getCharacterType = function() {
        let randNum = Math.round(Math.random() * (characterTypes.length - 1));
        return characterTypes[randNum];
    };

    let getCharacter = function(type) {
        let randNum = Math.round(Math.random() * (type.length - 1));
        return type[randNum];
    };

    for (let i = 0; i < length; i++) {
        let type = getCharacterType();
        let character = getCharacter(type);
        password += character;
    }

    return password;
};

export default generatePassword;
