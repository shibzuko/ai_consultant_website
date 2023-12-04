let tg = window.Telegram.WebApp;
tg.expand();

// Изменяем стиль основной кнопки
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2A9D8F";

// Обработка отправки формы
document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;

    // Собираем данные о родителе
    const parentName = form['parentName'].value;
    const phoneNumber = form['phoneNumber'].value;
    const childrenCount = form['childrenCount'].value;

    // Собираем данные о детях
    const childrenInfoElements = form.querySelectorAll('.child-info-block');
    const children = Array.from(childrenInfoElements).map(childBlock => {
        return {
            name: childBlock.querySelector('[name="childName[]"]').value,
            age: childBlock.querySelector('[name="childAge[]"]').value,
            class: childBlock.querySelector('[name="childClass[]"]').value
        };
    });

    // Формируем объект сообщения
    const messageObj = {
        'Parent Name': parentName,
        'Phone Number': phoneNumber,
        'Children Count': childrenCount,
        'Children Info': children
    };

    // Преобразуем объект сообщения в строку JSON
    const message = JSON.stringify(messageObj);

    // Отправляем данные в Telegram
    tg.sendData(message);
    tg.MainButton.setText("Форма отправлена!");
    tg.MainButton.show();
});
