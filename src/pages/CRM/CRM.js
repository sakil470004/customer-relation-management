import React, { useState } from 'react'
import Axios from 'axios'
import FileDownload from 'js-file-download';
import './CRM.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
function CRM() {
    const [projectBased, setProjectBased] = React.useState('Natural gas');
    const [projectTime, setProjectTime] = React.useState('5 Months');
    const [loading, setLoading] = useState(false);
    const handleProjectBasedChange = (event) => {
        setProjectBased(event.target.value);

    };
    const handleProjectTimeChange = (event) => {
        setProjectTime(event.target.value);

    };


    const handleDownload = (e) => {
        // console.log(userData)
        setLoading(true);
        let newUserInfo = { projectBased: projectBased, projectTime: projectTime }



        Axios.post('https://customer-relation-managements.herokuapp.com/downloadPersonal', newUserInfo, { responseType: 'blob' }).then((res) => {
            FileDownload(res.data, 'proposal.doc')
            setLoading(false)
        })
        // Axios({
        //     url: 'https://customer-relation-managements.herokuapp.com/downloadPersonal',
        //     method: 'post',
        //     responseType: 'blob'

        // }).then((res) => {
        //     FileDownload(res.data, 'proposal.doc')
        // })
    }


    return (loading ? <h1>Loading...</h1> :
        <div>
            <h2 style={{ margin: '2rem 0' }}>Adding Your Necessary Tittle and Time</h2>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel >Project Name</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"

                    value={projectBased}
                    onChange={handleProjectBasedChange}
                    label="Project Name"
                >

                    <MenuItem value='Natural gas'>Natural gas</MenuItem>
                    <MenuItem value='Wind turbine'>Wind turbine</MenuItem>
                    <MenuItem value='Solar panels'>Solar panels</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel >Project Time</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"

                    value={projectTime}
                    onChange={handleProjectTimeChange}
                    label="Project Time"
                >

                    <MenuItem value='5 Months'>5 Months</MenuItem>
                    <MenuItem value='3 Months'>3 Months</MenuItem>
                    <MenuItem value='Solar panels'>7 Months</MenuItem>
                </Select>
            </FormControl>
            <br />
            <button style={{ marginTop: '2rem' }} onClick={handleDownload} className='btn btn-primary'>Download Doc</button>
        </div>
    )
}

export default CRM