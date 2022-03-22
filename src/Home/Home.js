import React from 'react'
import {
    PieChart,
    Pie,
    Tooltip
} from "recharts";
function Home() {
    const data = [
        { name: "Gas", users: 2 },
        { name: "Oil", users: 15 },
        { name: "Wind", users: 10 },
        { name: "Solar", users: 20 },
    ];
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'' }}>

            <PieChart width={800} height={800}>
                <Pie
                    dataKey="users"
                    isAnimationActive={false}
                    data={data}
                    cx={400}
                    cy={200}
                    outerRadius={180}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>

        </div>
    )
}

export default Home