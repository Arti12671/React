import React from 'react'

export const FunctionalClick = () => {
    function getPrint() {
        console.log("clicked!!");
    }
  return (
    <div>
        <button>CLICK1</button>
        <button onclick="getPrint()">CLICK2</button>
        <button onclick="getPrint()">CLICK3</button>
        <button onclick={getPrint()}>CLICK4</button>
        <button onclick={getPrint}>CLICK5</button>

    </div>
  )
}
