import React from 'react';
import './HomeComment.css'
const HomeComment = ({ comment1 }) => {
    const { name, rating, comment } = comment1;
    return (
        <div>
            <h1>{comment}</h1>
        </div>
    );
};

export default HomeComment;