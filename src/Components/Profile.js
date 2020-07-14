import React from 'react'
import './Styles/Profile.css'

export default function Profile() {
    return (
        <div className='ProfileBox'>
            <div className='InnerChoice'>
                <div className='SideYou'>YOU.</div>
                <div className='ProfileList'>
                    <div className='ListItem'>my Projects</div>
                    <div className='ListItem'>my Topics</div>
                    <div className='ListItem'>my Blogs</div>
                </div>
                <button></button>
            </div>
            <div className='ProfileMain'></div>
        </div>
    )
}
