import React from 'react';
import useComments from '../../hooks/useComments';
import HomeComment from '../HomeComment/HomeComment';
import './HomeComments.css'
const HomeComments = () => {
    const [comments, setComments] = useComments();
    const newcomments = comments.slice(0, 3)

    return (
        <div className='container comments'>
            {
                newcomments.map(comment1 => <HomeComment comment1={comment1} key={comment1.id}></HomeComment>)
            }
        </div>
    );
};

export default HomeComments;