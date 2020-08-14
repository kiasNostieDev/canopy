import React from 'react'
import './Styles/Global.css'

export default function Global() {
    return (
        <div className="Global">
            <div className="GlobalTitle">GlobalDiscussion</div>
            <div className="GlobalOpinion">
                <div className="OpinionBox">
                    <input placeholder="-->   Give out your opinions, ideas and information if you've got"></input>
                    <div className="OpinionSend">
                        <button className="OpinionButton">Send</button>
                    </div>
                </div>
            </div>
            <div className="GlobalTalks"></div>
        </div>
    )
}
