import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// pic
import loaderPic from './icons/loader.svg';

import styles from './styles.module.css';

function Loader({ className }) {
    return (
        <div className={cn(styles.Root, className)}>
            <img src={loaderPic} alt="Крутилка" width="200px" />
        </div>
    );
}

Loader.propTypes = {
    className: PropTypes.string,
};

Loader.defaultProps = {
    className: '',
};


export default Loader;
