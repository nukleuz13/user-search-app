import React from 'react';

const UserItem = ({ user }) => {
    return (
        <div className="user-item">
            <img src={user.avatarUrl} alt={`${user.name}'s avatar`} className="avatar" />
            <span className="user-name">{user.name}</span>
        </div>
    );
};

export default UserItem;
