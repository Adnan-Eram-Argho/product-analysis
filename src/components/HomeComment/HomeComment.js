import React from 'react';
import './HomeComment.css'
const HomeComment = ({ comment1 }) => {
    const { name, rating, comment } = comment1;
    return (
        <div>
            <div className='comment'>
                <h3>Name: {name}</h3>
                <p>Comment: {comment}</p>
                <p><small>Rating: {rating}*</small></p>
            </div>
        </div>
    );
};

export default HomeComment;