export const generateSberName = (name) => {
    const prefix = 'Сбер';

    const vowel = [
        'а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я',
        'А', 'О', 'И', 'Е', 'Ё', 'Э', 'Ы', 'У', 'Ю', 'Я',
    ];

    let nameArray = [];
    let x = ''; // Согласный символ справа

    for (let i = 0; i <= name.length - 1; i++) {
        nameArray.push(name[i])
    }

    for (let i = 0; i <= 1; i++) {
        for (let j = 0; j <= vowel.length - 1; j++) {
            if (nameArray[i] === vowel[j]) {
                x = i + 1;
            }
        }
    }

    let spliceNameArray = nameArray.splice(x + 1);
    spliceNameArray.unshift(prefix);
    spliceNameArray.join(',');

    return spliceNameArray.join('');
}
