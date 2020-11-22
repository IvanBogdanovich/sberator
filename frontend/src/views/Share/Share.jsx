import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
    VKShareButton,
    FacebookShareButton,
    OKShareButton,
    FacebookIcon,
    VKIcon,
    OKIcon,
} from 'react-share';

// components
import HideTitle from '../../components/HideTitle';

import styles from './styles.module.css';

function Share({ className, picture }) {
    return (
        <section className={cn(styles.Root, className)}>
            <HideTitle>Шарим картинку</HideTitle>
            <img
                src={picture.src}
                alt={picture.alt}
                className={cn(styles.Image)}
            />

            <div className={cn(styles.WrapperIcons)}>
                <VKShareButton
                    title="Сбер"
                    url={window.location.href}
                    image={picture.src}
                >
                    <VKIcon />
                </VKShareButton>

                <FacebookShareButton
                    url={window.location.href}
                    quote="Сбер"
                >
                    <FacebookIcon />
                </FacebookShareButton>

                <OKShareButton
                    title="Сбер"
                    description="Сбер"
                    image={picture.src}
                    url={window.location.href}
                >
                    <OKIcon />
                </OKShareButton>
            </div>
        </section>
    );
}

Share.propTypes = {
    className: PropTypes.string,
    picture: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
    }).isRequired,
};

Share.defaultProps = {
    className: '',
};

export default Share;