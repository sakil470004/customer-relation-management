import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { addToDb } from '../fakedb/fakedb';
import bgImage from './../../assets/cover2.jpg'

function Register({ setUser }) {
  const [loginData, setLoginData] = useState({})

  const navigation = useNavigate();
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData)
  }

  const handleRegisterSubmit = (e) => {
    const newLoginData = { email: loginData.email.toLowerCase(), password: loginData.password }
    fetch('https://customer-relation-managements.herokuapp.com/adduser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newLoginData)

    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          // alert('Registration Success')
          addToDb(loginData.email)
          setUser(loginData.email)
          navigation('/')
        } else {
          alert(data.message)
        }
      })
    e.preventDefault();
  }
  return (
    <div className='bgAndText__container'>
      <div className="bgImage__item-image">
        <img src={bgImage} alt="" />
      </div>
      <div className='home__overlay' >
        <div >

          <h1 style={{color:'red'}}>Register</h1>

          <form onSubmit={handleRegisterSubmit}>
            <input className='inputBox'
              required
              placeholder="Your Email"
              variant="standard"
              name='email'
              onBlur={handleOnBlur}
            />

            <input
              className='inputBox'
              required
              type='password'
              placeholder="Your Password"
              variant="standard"
              name='password'
              onBlur={handleOnBlur}
            />
            <br />
            <button
              className='home__btn'
              type='submit'
            >Register</button>

          </form>
          <br />
          <br />
          Already have an account? <NavLink to='/login'> Go to login</NavLink>

        </div>
      </div>
    </div>
    

  )
}

export default Register