import React from 'react';
import Alert from 'react-bootstrap/Alert';

interface ErrorViewProps {
    errorMessage: string;
    children: React.ReactNode
}

const ErrorView: React.FC<ErrorViewProps> = ({ errorMessage, children }) => {
    return (
        <>
            <Alert variant='danger'>
                {errorMessage}
            </Alert>
            {children}
        </>
    );
};

export default ErrorView;