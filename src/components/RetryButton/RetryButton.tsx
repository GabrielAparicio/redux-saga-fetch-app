import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

import { setLoading, setError } from '../../store/usersSlice';

const RetryButton = () => {

    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        dispatch({
            type: 'FETCH_USERS'
        });
    };

    return (
        <Button 
            variant='primary'
            onClick={onClickHandler}
        >
            Retry
        </Button>
    );
};

export default RetryButton;