// types
import types from './types';

// initial state
const initialState = {
    isInitialApp: false,
    isOrderSending: false, // крутилка лоадера, формирование картинки, отправка base64 на сервак
    isGetPicForShare: false,
    namePrev: '',
    nameNext: '',
    dataPic: null,
    realPic: {
        src: null,
        alt: null,
    },
}

// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.INITIALIZED_SUCCESS: {
            return {
                ...state,
                isInitialApp: true,
            }
        }
        case types.SET_GENERATED_DATA_NAMES: {
            return {
                ...state,
                namePrev: action.namePrev,
                nameNext: action.nameNext,
            }
        }
        case types.SET_GENERATED_DATA_PIC: {
            return {
                ...state,
                dataPic: action.dataPic,
                isOrderSending: true,
            }
        }
        case types.SET_REAL_PIC: {
            return {
                ...state,
                realPic: action.realPic,
                isOrderSending: false,
                isGetPicForShare: true,
            }
        }
        default: {
            return state
        }
    }
}
