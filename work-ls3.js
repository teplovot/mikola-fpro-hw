/*let ageYour = prompt(`Який ваш рік народження`, `Введіть свій рік народження`);
let cityYour = prompt(`В якому місті ви живете`, `Введіть назву міста, в якому живете`);
let sportYour = prompt(`Який ваш улюбленний вид спорту`, `Введіть свій улюбленний вид спорту`);


currentDate = new Date();
currentYear = currentDate.getFullYear();


if(ageYour === null) {
    ageYour = "Шкода, що Ви не захотіли ввести свій рік народження";
}
else {
    ageYour = currentYear - ageYour;
    ageYour = `Тобі ${ageYour} років`;
}
ageYour = ageYour;



if(cityYour === null) {
    cityYour = "Шкода, що Ви не захотіли ввести назву міста, в якому живете";
}
else if (cityYour == `Київ`) {
    cityYour = `Ти живеш у столиці України`;
}
else if (cityYour == `Вашингтон`) {
    cityYour = `Ти живеш у столиці США`;
}
else if (cityYour == `Лондон`) {
    cityYour = `Ти живеш у столиці Англії`;
}
else {
    cityYour = `Ти живеш у місті ${cityYour}`;
}
cityYour = cityYour;



switch (sportYour) {
    case "Бокс":
        sportYour = `Круто! Хочеш стати як Тайсон?`;
        break;
    case "Футбол":
        sportYour = `Круто! Хочеш стати як Мессі?`;
        break;
    case "Боротьба":
        sportYour = `Круто! Хочеш стати як Олійник?`;
        break;
    case null:
        sportYour = `Шкода, що Ви не захотіли ввести назву свого улюбленого виду спорту`;
        break;
    default:
        sportYour = `Твій улюблений вид спорту ${sportYour}`;
        break;
}

alert(`${ageYour}\n${cityYour}\n${sportYour}`);*/
