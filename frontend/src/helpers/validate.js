
// TODO объединить
export function validateName(value) {
    let error;
    if (!value) {
        error = 'Заполните имя';
    } else if(value.length < 2) {
        error = 'Имя должно быть минимум из 2-х символов';
    } else if(value.length > 30) {
        error = 'Имя должно быть не длиннее 30 симоволов';
    }
    else if (!/^[\u2013-\u2014\-а-яА-ЯёЁ,.'\s]+$/i.test(value)) {
        error = 'Введите имя на русском';
    }
    return error;
}

export function validateSurname(value) {
    let error;
    if (!value) {
        error = 'Заполните фамилию';
    } else if(value.length < 2) {
        error = 'Фамилия должна быть минимум 2 символа';
    } else if(value.length > 30) {
        error = 'Фамилия должна быть не длиннее 30 симоволов';
    } else if (!/^[\u2013-\u2014\-а-яА-ЯёЁ,.'\s]+$/i.test(value)) {
        error = 'Введите фамилию на русском';
    }

    return error;
}