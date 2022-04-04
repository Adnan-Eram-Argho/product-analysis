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
                newcomments.map(generalComment => <HomeComment comment1={generalComment} key={generalComment.id} ></HomeComment>)
            }
        </div >
    );
};

export default HomeComments;