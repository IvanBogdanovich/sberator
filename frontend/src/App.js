import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// components
import Loader from './components/Loader';
import Canvas from './components/Canvas';

// views
import FormView from './views/FormView';
import Share from './views/Share';
import IE from './views/IE';

// actions
import { getInitializedSuccess, orderThunk } from './state/app/actions';

import './styles/variables.css';
import './styles/global.css';

function App() {
    const dispatch = useDispatch();

    // флаги
    const isInitialApp = useSelector(state => state.app.isInitialApp);
    const isOrderSending = useSelector(state => state.app.isOrderSending);
    const isGetPicForShare = useSelector(state => state.app.isGetPicForShare);

    // пэйлоад для сервачка
    const nameGenerated = useSelector(state => state.app.nameNext);
    const namePrevious = useSelector(state => state.app.namePrev);
    const dataPic = useSelector(state => state.app.dataPic);

    // пикча для шаринга
    const realPic = useSelector(state => state.app.realPic);

    useEffect(() => {
        dispatch(getInitializedSuccess());

        if(isOrderSending && dataPic) {
            dispatch(orderThunk(namePrevious, nameGenerated, dataPic));
        }
    }, [dispatch, nameGenerated, namePrevious, isOrderSending, dataPic])

    if (!isInitialApp || isOrderSending) {
        return <Loader />
    }

    if (
        /MSIE 9/i.test(navigator.userAgent) ||
        /rv:11.0/i.test(navigator.userAgent)
    ) {
        return <IE />
    }

    return (
        <>
            { (isInitialApp && !isGetPicForShare) &&
                <>
                    <FormView />
                   {nameGenerated && <Canvas nameGenerated={nameGenerated} /> }
                </>
            }

            {
                isGetPicForShare && <Share picture={realPic} />
            }
        </>
    );
}

export default App;
