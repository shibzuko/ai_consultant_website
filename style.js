//Изменение диапазона значений:
document.addEventListener("DOMContentLoaded", function() {
    const modelRadios = document.querySelectorAll('input[name="model"]');
    const tokenInput = document.getElementById("num_tokens");

    modelRadios.forEach(radio => {
        radio.addEventListener("change", function() {
            switch (this.id) {
                case "gpt-3.5-4k":
                    tokenInput.setAttribute("min", "100");
                    tokenInput.setAttribute("max", "4000");
                    tokenInput.setAttribute("placeholder", "От 100 до 4000");
                    break;
                case "gpt-3.5-16k":
                    tokenInput.setAttribute("min", "100");
                    tokenInput.setAttribute("max", "16000");
                    tokenInput.setAttribute("placeholder", "От 100 до 16000");
                    break;
                case "gpt-4-8k":
                    tokenInput.setAttribute("min", "100");
                    tokenInput.setAttribute("max", "8000");
                    tokenInput.setAttribute("placeholder", "От 100 до 8000");
                    break;
            }
        });
    });
});

//Сообщение о некорректности данных:
document.querySelector('form').addEventListener('submit', function(e) {
    const tokensValue = parseInt(tokenInput.value, 10);
    const temperatureValue = parseFloat(document.getElementById("temperature").value);

    if (tokensValue < 100 || tokensValue > parseInt(tokenInput.getAttribute("max"), 10) || isNaN(tokensValue)) {
        alert('Введите корректное количество токенов!');
        e.preventDefault();
    }

    if (temperatureValue < 0 || temperatureValue > 2 || isNaN(temperatureValue)) {
        alert('Введите корректное значение температуры!');
        e.preventDefault();
    }
});
