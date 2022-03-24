import React from 'react'
import './Home.css'
import bgImage from './../../assets/cover2.jpg'
import DownloadIcon from '@mui/icons-material/Download';

import { useNavigate } from 'react-router';
function Home() {
    const Navigation = useNavigate();

    return (
        <div className="bgAndText__container" >
            <div className="bgImage__item-image">
                <img src={bgImage} alt="" />
            </div>

            <div className='home__overlay'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'green', cursor: 'pointer' }}><DownloadIcon />
                    <h2 style={{ color: 'green' }}>Rapid Proposal</h2></div>
                <h1>Our Purpose Is Help Our Customer Life Easier</h1>
                <h3>You our welcome to take our service</h3>
                <div>
                    <button className='home__btn' onClick={() => Navigation('/login')}>
                        Log In
                    </button>
                    <button className='home__btn' onClick={() => Navigation('/dashboard')}>
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home