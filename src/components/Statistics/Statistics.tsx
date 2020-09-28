import React from 'react';
import { useSelector } from 'react-redux';
import { 
    numOfMembersSelector, 
    lastUserDateSelector,
    numOfInvitedUsers,
    numOfPublishedCampaigns
} from '../../store/selectors';

import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const Statistics = () => {
    const members = useSelector(numOfMembersSelector);
    const lastUserDate = useSelector(lastUserDateSelector);
    const invitedUsers = useSelector(numOfInvitedUsers);
    const publishedCampaigns = useSelector(numOfPublishedCampaigns);

    return (
        <>
            <Col xs={12} lg={3}>
                <Alert variant='primary'>
                    Members: {members}
                </Alert>
            </Col>
            
            <Col xs={12} lg={3}>
                <Alert variant='secondary'>
                    Last user added on: {lastUserDate}
                </Alert>
            </Col>

            <Col xs={12} lg={3}>
                <Alert variant='warning'>
                    Invited users: {invitedUsers}
                </Alert>
            </Col>

            <Col xs={12} lg={3}>
                <Alert variant='info'>
                    Published Campaigns: {publishedCampaigns}
                </Alert>
            </Col>
        </>
    );
};

export default Statistics;