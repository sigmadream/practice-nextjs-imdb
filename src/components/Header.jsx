import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'

export default function Header() {
  return (
    <div>
        <div className=''>
            <MenuItem title='Home' address='/' icon={AiFillHome} />
        </div>
        <div className=''>

        </div>
    </div>
  )
}
