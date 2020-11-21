import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.css';

function Label({ className, children, htmlFor }) {
    return (
        <label className={cn(styles.Root, className)} htmlFor={htmlFor}>
            {children}
        </label>
    );
}

Label.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.node.isRequired,
};

Label.defaultProps = {
    className: '',
};

export default Label;