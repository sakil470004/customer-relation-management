import React from 'react'
import './Home.css'
import bgImage from './../assets/cover2.jpg'
import DownloadIcon from '@mui/icons-material/Download';
import {
    PieChart,
    Pie,
    Tooltip
} from "recharts";
import { useNavigate } from 'react-router';
function Home() {
    const Navigation = useNavigate();

    // const data = [
    //     { name: "Gas", users: 2 },
    //     { name: "Oil", users: 15 },
    //     { name: "Wind", users: 10 },
    //     { name: "Solar", users: 20 },
    // ];
    // <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'' }}>

    //     <PieChart width={800} height={800}>
    //         <Pie
    //             dataKey="users"
    //             isAnimationActive={false}
    //             data={data}
    //             cx={400}
    //             cy={200}
    //             outerRadius={180}
    //             fill="#8884d8"
    //             label
    //         />
    //         <Tooltip />
    //     </PieChart>

    // </div>
    return (
        <article className="bgAndText__container" >
            <div className="bgImage__item-image">
                <img src={bgImage} alt="" />
            </div>

            <div className='home__overlay'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'green', cursor: 'pointer' }}><DownloadIcon />
                    <h2 style={{ color: '#5c47a5' }}>Rapid Proposal</h2></div>
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
        </article>
    )
}

export default Home