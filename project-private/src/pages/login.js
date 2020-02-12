import React from 'react'
import Loginform from '../Components/loginform'
import {Link} from 'react-router-dom'
import Button from '../Components/Button'


const Login = () => {
    return(
        <div>
            <Loginform/>
            <Link to='/'>
            <Button color='danger' label='submit' />
            </Link>
        </div>
    )
}

export default Login