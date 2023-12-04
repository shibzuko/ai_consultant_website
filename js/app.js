let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#0BAC00";

document.getElementById("sendModelSettings").addEventListener("click", function() {
    const form = document.querySelector('form');

    const model = form['model'].value;
    const numTokens = form['num_tokens'].value;
    const temperature = form['temperature'].value;
    const promt = form['promt'].value;

    const messageObj = {
        'Model': model,
        'Tokens': numTokens,
        'Temperature': temperature,
        'Promt': promt
    };

    const message = JSON.stringify(messageObj);

    tg.sendData(message);
    tg.MainButton.setText("Настройки сохранены!");
    tg.MainButton.show();
});

document.getElementById("sendAdvancedSettings").addEventListener("click", function() {
        const form = document.querySelector('form');

    const tokendb = form['tokendb'].value;


    const messageObj = {
        'Token DB': tokendb
    };

    const message = JSON.stringify(messageObj);

    tg.sendData(message);
    tg.MainButton.setText("Токен добавлен!");
    tg.MainButton.show();
});



//let gpt_3_5_4k = document.getElementById("gpt-3.5-4k"); //получаем кнопку активировать/деактивировать
//gpt_3_5_4k.addEventListener("click", function(){
//	tg.MainButton.setText("Сообщение отправлено!");
//	tg.MainButton.show();
//	tg.sendData("gpt-3.5-turbo-0613");
//});
//
//let gpt_3_5_16k = document.getElementById("gpt-3.5-16k");
//gpt_3_5_16k.addEventListener("click", function(){
//	tg.MainButton.setText("Сообщение отправлено!");
//	tg.MainButton.show();
//	tg.sendData("gpt-3.5-turbo-16k-0613");
//});
//
//let gpt_4_8k = document.getElementById("gpt-4-8k"); //получаем кнопку активировать/деактивировать
//gpt_4_8k.addEventListener("click", function(){
//	tg.MainButton.setText("Сообщение отправлено!");
//	tg.MainButton.show();
//	tg.sendData("gpt-4-0613");
//});

//let gpt_4_32k = document.getElementById("gpt-4-32k");
//gpt_4_32k.addEventListener("click", function(){
//	tg.MainButton.setText("Сообщение отправлено!");
//	tg.MainButton.show();
//	tg.sendData("gpt-4-32k-0613");
//});