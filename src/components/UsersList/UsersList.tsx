import React, { useEffect } from 'react';
import UserItem from '../UserItem';
import LoadingView from '../../views/LoadingView';
import ErrorView from '../../views/ErrorView';
import RetryButton from '../RetryButton';
import { usersSelector, isLoadingSelector, errorSelector } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';

const UsersList: React.FC = () => {

    const users = useSelector(usersSelector);
    const isLoading = useSelector(isLoadingSelector);
    const error = useSelector(errorSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_USERS'
        });
    }, [dispatch]);

    if(isLoading)
        return <LoadingView />;

    if(error) {
        return (
            <ErrorView errorMessage='Unable to show team members'>
                <RetryButton />
            </ErrorView>
        );
    }
        
    const mappedUsers = users.map((user) => <UserItem key={user.id} userData={user} />);
    return (
        <div>
            {mappedUsers}
        </div>
    );
};

export default UsersList;