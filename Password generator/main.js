// Target required HTML elements
const passwordInput = document.getElementById("passwordInput"),
    lengthSlider = document.getElementById("lengthSlider"),
    lengthValue = document.getElementById("lengthValue"),
    generatePasswordBtn = document.getElementById("generatePasswordtn"),
    copyBtn = document.getElementById("copyBtn");

const criterias = document.querySelectorAll(".criteria");

const smallLetters =
    ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    capitalLetters =
        ["A", "B", "C", "d", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    symbols =
        ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '{', '}', '|', ',', '?', ':', ';', '/', '<', '>'];

// Event listeners
window.addEventListener("load", () => passwordInput.value = generatePassword(lengthValue.value))
lengthSlider.addEventListener("input", (e) => lengthValue.value = lengthSlider.value)
lengthValue.addEventListener("input", () => lengthSlider.value = lengthValue.value)
generatePasswordBtn.addEventListener("click", () => passwordInput.value = generatePassword(lengthValue.value))
copyBtn.addEventListener("click", copyPassword)

// Function declarations
function generatePassword(passwordLength) {
    let pass = "";

    for (let i = 0; i < passwordLength; i++) {
        let charType = selected[Math.floor(Math.random() * selected.length)];
        switch (charType) {
            case 0:
                pass += smallLetters[Math.floor(Math.random() * smallLetters.length)];
                break;

            case 1:
                pass +=
                    capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
                break;

            case 2:
                pass += numbers[Math.floor(Math.random() * numbers.length)];
                break;

            case 3:
                pass += symbols[Math.floor(Math.random() * symbols.length)];
                break;

            default:
                break;
        }
    }
    return pass;
}
let selected = []
criterias.forEach((criteria, index) => {
    criteria.addEventListener("click", function (e) {
        if (e.currentTarget.checked) {
            selected.push(index)
        }
    })
})

// Function for copy text
function copyPassword() {
    passwordInput.select()
    let password = passwordInput.value;
    navigator.clipboard.writeText(password)
}

