import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// actions
import { setGenerateDataPic } from '../../state/app/actions';

// pic
import picture from '../../images/soho.png';

function Canvas({ nameGenerated }) {
    const dispatch = useDispatch();

    const canvas = useRef(null);
    const img = useRef(null);

    const name = nameGenerated.split(' ')[0];
    const surname = nameGenerated.split(' ')[1];

    useEffect(() => {
        const ctx = canvas.current.getContext('2d');

        img.current.onload = function() {
            ctx.drawImage(img.current, 0, 0);
            ctx.font = '90px bold Courier';
            ctx.fillStyle = 'green';
            ctx.fillText(name, 50, 110);
            ctx.fillText(surname, 50, 210);
            canvas.current.toDataURL('image/png');

            dispatch(setGenerateDataPic(canvas.current.toDataURL('image/png')));
        };
    }, [name, surname, dispatch]);

    return (
        <>
            <canvas ref={canvas} width={600} height={600} hidden={true} />
            <img ref={img} src={picture} alt="" hidden={true} />
        </>
    );
}

Canvas.propTypes = {
    nameGenerated: PropTypes.string.isRequired,
};

export default Canvas;
