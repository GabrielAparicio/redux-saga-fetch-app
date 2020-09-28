import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortingField, setSortingType } from '../../store/sortingSlice';

import FormGroup from 'react-bootstrap/FormGroup';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';

import { selectProps, radioProps } from './sortingProps';


const Sorting = () => {

    const dispatch = useDispatch();

    const onChangeRadioHandler = (event: any) => {
        const val = event.target.value;
        dispatch(setSortingType(val));
    };

    const onChangeSelectHandler = (event: any) => {
        const val = event.target.value;
        dispatch(setSortingField(val));
    };

    const { selectItems } = selectProps;
    const mappedSelectItems = selectItems.map(
        (item) => (
        <option key={item.value} value={item.value}>{item.label}</option>
        )
    );

    const { radioItems } = radioProps;
    const mappedRadioItems = radioItems.map(
        (item) => (
            <FormCheck 
                    key={item.value}
                    inline 
                    label={item.label} 
                    type={'radio'} 
                    name={radioProps.name}
                    value={item.value}
                    onChange={onChangeRadioHandler}
            />
        )
    );

    return (
        <div>
            <span>
                <FormGroup>
                    <FormLabel>{selectProps.label}</FormLabel>
                        <FormControl 
                            as="select" 
                            onChange={onChangeSelectHandler}
                        >
                            {mappedSelectItems}
                        </FormControl>
                </FormGroup>
            </span>

            <span>
                {mappedRadioItems}
            </span>
            
        </div>
    );
};

export default Sorting;