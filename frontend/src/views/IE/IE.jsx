import React , { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.css';

function IE({ className }) {
    const currentYear = useRef(new Date().getFullYear()).current;

    return (
        <div className={cn(styles.Root, className)}>
            <p className={cn(styles.Text)}>
                Привет! Сейчас {currentYear} год. Уже много лет прошло с тех пор когда браузер Internet Explorer задавал тренды в индустрии. Я помню его ещё когда ярлычок на рабочем столе с ним назывался просто и гениально «Интернет». Клик по нему для нас детей нулевых закрывал потребность в любознательности. Сейчас IE – эта звёздочка которая ушла в закат. Низкий поклон создателям этих удивительных дверей в знания. Провожаю с честью и достоинством этот браузер который увеличил скорость прогресса по экспоненте!
            </p>
        </div>
    );
}

IE.propTypes = {
    className: PropTypes.string,
};

IE.defaultProps = {
    className: '',
};

export default IE;
