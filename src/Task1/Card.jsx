import React from 'react'
import "./App.css"

export const Card = (props) => {
  return (
    <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="" />
                <div className="card-body">
                    <span className="card-category">{props.cardcat}</span>
                    <h3 className="title">{props.title}</h3>
                    <a href={props.add}>
                        <button>Watch</button>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}
