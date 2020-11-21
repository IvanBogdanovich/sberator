import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.css';

function HideTitle({ className, children }) {
    return (
        <h2 className={cn(styles.Root, className)}>
            {children}
        </h2>
    );
}

HideTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

HideTitle.defaultProps = {
    className: '',
};

export default HideTitle;
