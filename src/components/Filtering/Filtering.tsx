import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setFilterContent } from '../../store/filterSlice';

import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';


const Filtering = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const onChangeHandler = (event: any) => {
        const value = event.target.value;
        setInputValue(value);
        dispatch(setFilterContent(value));
    };

    return (
        <FormGroup>
            <FormLabel>Search</FormLabel>
            <FormControl 
                type="text"
                placeholder="Search"
                value={inputValue} 
                onChange={onChangeHandler}
            />
        </FormGroup>
    );
};

export default Filtering;