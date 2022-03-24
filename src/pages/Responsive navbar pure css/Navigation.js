import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../fakedb/fakedb';
import './Navigation.css';


const Navigation = ({ user, setUser }) => {
    const handleLogOut = () => {
        removeFromDb();
        setUser('')
    }

    return (
        <div >
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title  ">
                        <Link style={{ color: '#3c47a5', cursor: 'pointer' }} to='/'>Rapid Proposal</Link>
                        {/* logo */}

                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='/Dashboard'>DashBoard</Link>
                    {user && <Link to='/'>{user}</Link>
                    }
                    {!user ?
                        <Link to='/login'>Login</Link> :
                        <Link onClick={handleLogOut} to='/'>Logout</Link>}
                </div>
            </div>

        </div>
    );

}
export default Navigation;
