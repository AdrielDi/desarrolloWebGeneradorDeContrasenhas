document.getElementById("generatePassword").addEventListener("click", function () {
    const length = parseInt(document.getElementById("length").value);
    const useLetters = document.getElementById("letters").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const password = generatePassword(length, useLetters, useNumbers);
    document.getElementById("password").value = password;
});

function generatePassword(length, useLetters, useNumbers) {
    const charset = [];
    if (useLetters) {
        charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
    }
    if (useNumbers) {
        charset.push("0123456789");
    }

    if (charset.length === 0) {
        return "Selecciona al menos una opción";
    }

    const charsetString = charset.join("");
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsetString.length);
        password += charsetString.charAt(randomIndex);
    }

    return password;
}   