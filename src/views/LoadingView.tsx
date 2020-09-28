import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


const LoadingView: React.FC = () => {
    return (
        <Spinner animation="border" variant="primary" />
    );
};

export default LoadingView;