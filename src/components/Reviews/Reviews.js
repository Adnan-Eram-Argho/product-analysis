import React from 'react';
import useComments from '../../hooks/useComments';
import HomeComment from '../HomeComment/HomeComment';

const Reviews = () => {
    const [comments, setComments] = useComments();
    return (
        <div >
            <h1 >What Our Customers Say</h1>
            <div className='comments'>
                {
                    comments.map(comment1 => <HomeComment comment1={comment1}></HomeComment>)
                }
            </div>
        </div>
    );
};

export default Reviews;