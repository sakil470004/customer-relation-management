import React from 'react'

function Revenue() {
    return (
        <div style={{ boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)', borderRadius: '1rem', overflow: 'hidden' }}>
            <div style={{ color: 'black', background: 'grey', padding: '0.8rem 0' }} className='revenue-title'>
                <h2>Revenue</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <h3>0-30 days  </h3><span style={{ border: '1px solid grey', padding: '0px 1px' }}>$1,250,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <h3>31-60 days  </h3><span style={{ border: '1px solid grey', padding: '0px 1px' }}>$3,250,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <h3>61-90 days  </h3><span style={{ border: '1px solid grey', padding: '0px 1px' }}>$250,0,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                    <h3>Total  </h3><span style={{ border: '1px solid grey', padding: '0px 1px' }}>$1,250,000</span>
                </div>
            </div>

        </div>
    )
}

export default Revenue