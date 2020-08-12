import React from 'react'
import '../Styles/ProfileHome.css'
import room from "../../Drawables/class.png";

export default function ProfileHome() {

    const name = 'Akinthiya Srinath'
    const boxes = ['Projects','Topics','Blogs']
    const nums = ['20','04','13']

    return (
        <div className='ProfileHome'>
            <div className='ProfileName'>{name}</div>
            <div className='ProfileCount'>
                <div className='ContentC'>
                    <div className='Number'>{nums[0]}</div>
                    <div className='Noname'>{boxes[0]}</div>
                </div>
                <div className='ContentC'>  
                    <div className='Number'>{nums[1]}</div>
                    <div className='Noname'>{boxes[1]}</div>
                </div>
                <div className='ContentC'>
                    <div className='Number'>{nums[2]}</div>
                    <div className='Noname'>{boxes[2]}</div>
                </div>
            </div>
            <div className='EditButton'>
                <button>EditProfile</button>
            </div>
            <div className='ProfileDetails'>
                <div></div>
            </div>
        </div>
    )
}
