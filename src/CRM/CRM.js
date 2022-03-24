import React, { useState } from 'react'
import Axios from 'axios'
import FileDownload from 'js-file-download';
import './CRM.css'
function CRM() {
    // const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newUser = { ...userData }
        newUser[name] = value

        setUserData(newUser)
        console.log(newUser)
    }

    const handleDownload = (e) => {
        console.log(userData)

        
        Axios.post('http://localhost:5000/downloadPersonal',  userData,{ responseType: 'blob' }).then((res) => {
            FileDownload(res.data, 'proposal.doc')
        })
        // Axios({
        //     url: 'http://localhost:5000/downloadPersonal',
        //     method: 'post',
        //     responseType: 'blob'

        // }).then((res) => {
        //     FileDownload(res.data, 'proposal.doc')
        // })
    }


    return (
        <div style={{ marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center',color:'black' }}>
                <div className="radio-buttons">
                    <div>
                        <input
                            value="Natural gas"
                            name="projectBased"
                            type="radio"
                            onChange={handleChange}

                        />
                        Natural gas
                    </div>
                    <div>
                        <input
                            value="Wind turbine"
                            name="projectBased"
                            type="radio"
                            onChange={handleChange}
                        />
                        Wind turbine
                    </div>
                    <div>
                        <input
                            value="Solar panels"
                            name="projectBased"
                            type="radio"
                            onChange={handleChange}
                        />
                        Solar panels
                    </div>
                </div>
                <div className="radio-buttons">
                    <div>
                        <input
                            value="5 Months"
                            name="projectTime"
                            type="radio"
                            onChange={handleChange}

                        />
                        5 Months
                    </div>
                    <div>
                        <input
                            value="3 Months"
                            name="projectTime"
                            type="radio"
                            onChange={handleChange}
                        />
                        3 Months
                    </div>
                    <div>
                        <input
                            value="7 Months"
                            name="projectTime"
                            type="radio"
                            onChange={handleChange}
                        />
                        7 Months
                    </div>
                </div>

            </div>
            <button style={{ marginTop: '2rem' }} onClick={handleDownload} className='btn btn-primary'>Download Doc</button>
        </div>
    )
}

export default CRM