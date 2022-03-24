import React from 'react'
import './WeeklySummery.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Grid } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

function WeeklySummery() {
    return (
        <div>

            <h2 style={{ align: 'left', display: 'flex', alignItems: 'left' ,margin:'1rem'}}>
                Weekly Summery
            </h2>


            <Grid container spacing={3}>
                <Grid item xs={12} md={4}  >
                    <div className='card_weeklySummery'>
                        <div className='card_title'> <AccessAlarmIcon />
                            <h3>Proposal Pending</h3></div>
                        <ul>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
                    <div className='card_weeklySummery'>
                        <div className='card_title'> <CampaignIcon />
                            <h3>Action</h3></div>
                        <ul>
                            <li>Lorem, ipsum dolor.</li>

                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
                    <div className='card_weeklySummery'>
                        <div className='card_title' style={{color:'red'}}> <HourglassTopIcon />
                            <h3>At Risk</h3></div>
                        <ul>
                            <li>Lorem, ipsum dolor.</li>

                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default WeeklySummery