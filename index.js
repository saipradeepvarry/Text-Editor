function applyStyles() {
    const textInput = document.getElementById('textInput');
    const fontSizeInput = document.getElementById('fontSize');
    const fontFamilySelect = document.getElementById('fontFamily');
    const textColorInput = document.getElementById('textColor');
    const boldCheckbox = document.getElementById('bold');
    const outputDiv = document.getElementById('output');

    const fontSize = fontSizeInput.value + 'px';
    const fontFamily = fontFamilySelect.value;
    const textColor = textColorInput.value;
    const isBold = boldCheckbox.checked;

    function showAlert(message) {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert');
        alertDiv.textContent = message;
        const errorDiv = document.getElementById('error');
        errorDiv.appendChild(alertDiv);

        // Remove the alert after 2 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 2000);
    }

    if (textInput.value.trim() !== '') {
        let styleString = `font-size: ${fontSize}; font-family: ${fontFamily}; color: ${textColor};`;
        if (isBold) {
            styleString += ' font-weight: bold;';
        }

        outputDiv.innerHTML += `<p style="${styleString}">${textInput.value}</p>`;
        textInput.value = '';

        // Set focus back to the input
        textInput.focus();
    } else {
        // Show an alert if the text is empty
        showAlert('*Please enter some text!');
    }
}