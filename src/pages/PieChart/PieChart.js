import React from 'react'
import {
    PieChart,
    Pie,
    Tooltip
} from "recharts";

function PieChartExtra() {

    const data = [
        { name: "X Company", users: 5 },
        { name: "Y Company", users: 15 },
        { name: "Z Company", users: 10 },
        { name: "P Company", users: 20 },
    ];

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '' }}>

            <PieChart width={420} height={420}>
                <Pie
                    dataKey="users"
                    isAnimationActive={false}
                    data={data}
                    cx={210}
                    cy={210}
                    outerRadius={170}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>

        </div>
    )
}

export default PieChartExtra