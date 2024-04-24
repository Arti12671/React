import React from 'react'
import Players from "./Player.json"
import "./App.css"

export const Player = () => {
    return (
        <div className="players">
            {
                Players && Players.map((player) => {
                    return (
                        <div className='player'>
                            {/* console.log(pla) */}
                            <div className="box" key={player.id}>
                                <h1>{player.name}</h1>
                                <img src={player.image} alt="" />
                                <h5 >{player.about}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
