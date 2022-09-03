import React from 'react';

const UserInfoStore = ({singleInfo}) => {
    const {userName, Password, Phone, Email} =singleInfo;
    return (
        <div>
            <p>Name: {userName}</p>
            <p>Name: {Password}</p>
            <p>Name: {Phone}</p>
            <p>Name: {Email}</p>
        </div>
    );
};

export default UserInfoStore;