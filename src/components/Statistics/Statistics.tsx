import React from 'react';
import { useSelector } from 'react-redux';
import { 
    numOfMembersSelector, 
    lastUserDateSelector,
    numOfInvitedUsers,
    numOfPublishedCampaigns
} from '../../store/selectors';

import Col from 'react-bootstrap/Col';

const Statistics = () => {
    const members = useSelector(numOfMembersSelector);
    const lastUserDate = useSelector(lastUserDateSelector);
    const invitedUsers = useSelector(numOfInvitedUsers);
    const publishedCampaigns = useSelector(numOfPublishedCampaigns);

    return (
        <>
            <Col xs={12} lg={3}>
                <p>Members: {members}</p>
            </Col>
            
            <Col xs={12} lg={3}>
                <p>Last user added on: {lastUserDate}</p>
            </Col>

            <Col xs={12} lg={3}>
                <p>Invited users: {invitedUsers}</p>
            </Col>

            <Col xs={12} lg={3}>
                <p>Published Campaigns: {publishedCampaigns}</p>
            </Col>
        </>
    );
};

export default Statistics;