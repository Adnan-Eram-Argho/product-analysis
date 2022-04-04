import React from 'react';
import headpic from '../../images/OILHK60.jpg'
import HomeComments from '../HomeComments/HomeComments';
import './Home.css'
const Home = () => {
    return (
        <div >
            <div className='home container'>
                <div>
                    <h1 style={{ fontWeight: 'bold', color: '#6464d7', fontSize: '55px' }}>Your Next headphone</h1>
                    <h2 style={{ fontWeight: 'bold', color: '#6464d7', fontSize: 'rgb(139, 184, 232)' }}>Your Best headphone</h2>
                    <p style={{ marginTop: '40px' }}>Now a Days wearing fancy headphones are a trend.Almost everyBody has a headphone of their own .So what are you waiting for use our website to find the <span style={{ color: 'tomato', fontWeight: 'bold' }}>Best Headphone</span> posible</p>
                </div>
                <div>
                    <img src={headpic} alt="" className='img-fluid' />
                </div>
            </div>


            <HomeComments></HomeComments>
        </div>
    );
};

export default Home;