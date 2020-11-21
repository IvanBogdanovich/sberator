// types
import types from './types';

// api
import { appAPI } from './api';

// utils
import { generateSberName } from '../../helpers/generateSberName';

// Инит апчика
export function getInitializedSuccess() {
    return {
        type: types.INITIALIZED_SUCCESS
    }
}

// Сетаем в глобал стор сгенерённое имя, фамилию
export function setGenerateDataName(values) {
    const { name, surname } = values;

    const nameForState = name.trim();
    const surnameForState = surname.trim();

    return {
        type: types.SET_GENERATED_DATA_NAMES,

        namePrev: `${nameForState} ${surnameForState}`,
        nameNext: `${generateSberName(nameForState)} ${generateSberName(surnameForState)}`,
    }
}

// Сетаем в глобал стор сгенерённую пикчу
export function setGenerateDataPic(dataPic) {
    return {
        type: types.SET_GENERATED_DATA_PIC,
        dataPic,
    }
}

// Сетаем в глобал стор ccылку на сгенерённую картинку
export function setRealPic(realPic) {
    return {
        type: types.SET_REAL_PIC,
        realPic,
    }
}

// Реквест на бэк
export function orderThunk(namePrev, nameNext, dataPic) {
    return async dispatch => {
        try {
            const response = await appAPI.sendData(namePrev, nameNext, dataPic);

            dispatch(setRealPic(response.pic));
        }
        catch(e) {
            throw new Error(e);
        }
    }
}
