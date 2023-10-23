function encryptBinary(text) {
    let binaryText = '';
    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);
        const binary = charCode.toString(2); // Converte o caractere para binário
        binaryText += binary + ' '; // Adiciona espaço para separar os caracteres binários
    }
    return binaryText;
}

function decryptBinary(binaryText) {
    const binaryArray = binaryText.trim().split(' '); // Divide os caracteres binários
    let decryptedText = '';
    for (const binary of binaryArray) {
        const charCode = parseInt(binary, 2); // Converte o binário de volta para o código de caractere
        decryptedText += String.fromCharCode(charCode);
    }
    return decryptedText;
}

// Função para copiar texto para a área de transferência
function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

document.getElementById("encryptButton").addEventListener("click", function () {
    const plaintext = document.getElementById("plaintext").value;
    const encryptedText = encryptBinary(plaintext);
    document.getElementById("encryptedText").textContent = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function () {
    const ciphertext = document.getElementById("ciphertext").value;
    const decryptedText = decryptBinary(ciphertext);
    document.getElementById("decryptedText").textContent = decryptedText;
});

document.getElementById("copyEncryptedTextButton").addEventListener("click", function () {
    const encryptedText = document.getElementById("encryptedText").textContent;
    copyToClipboard(encryptedText);
    alert("Texto Criptografado Copiado para a Área de Transferência!");
});

document.getElementById("copyDecryptedTextButton").addEventListener("click", function () {
    const decryptedText = document.getElementById("decryptedText").textContent;
    copyToClipboard(decryptedText);
    alert("Texto Descriptografado Copiado para a Área de Transferência!");
});
