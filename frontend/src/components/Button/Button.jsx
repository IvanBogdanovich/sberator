import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.css';

function Button({ className, children }) {
    return (
        <button
            type="submit"
            aria-label="Сгенерировать Имя"
            autoComplete="off"
            className={cn(styles.Root, className)}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    className: '',
};

export default Button;