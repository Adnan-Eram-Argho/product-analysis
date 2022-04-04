import React from 'react';
import useComments from '../../hooks/useComments';
import HomeComment from '../HomeComment/HomeComment';
import './HomeComments.css'
const HomeComments = () => {
    const [comments, setComments] = useComments();

    return (
        <div className='container'>
            {
                comments.map(comment1 => <HomeComment comment1={comment1} key={comment1.id}></HomeComment>)
            }
        </div>
    );
};

export default HomeComments;