import React from 'react'
import Button from '../Components/Button'
import {Link} from 'react-router-dom'

const Homepages = () => {
    return(
        <div>
            <Link to='/login'>
            <Button color='primary' label='submit' />
            </Link>
        </div>
    )
}

export default Homepages