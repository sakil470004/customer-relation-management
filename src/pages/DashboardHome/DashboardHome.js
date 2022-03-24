import { Grid } from '@mui/material'
import React from 'react'
import PieChartExtra from '../PieChart/PieChart'
import Revenue from '../Revenue/Revenue'
import WeeklySummery from '../WeeklySummery/WeeklySummery'

function DashboardHome() {
    return (
        <div>
         
            <Grid container spacing={2}>
                <Grid item  xs={12} md={5}  >
                    <Revenue />
                </Grid>
                <Grid item xs={12} md={7}>
                    <PieChartExtra />
                </Grid>

            </Grid>
            <WeeklySummery/>
        </div>
    )
}

export default DashboardHome