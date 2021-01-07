import { useEffect, useState } from "react";
import "./style.css";
import mousePic from "../Mouse/assets/mouseShortTail.png"
import mousePicPlus from "../Mouse/assets/mouseShortTailPlus.png"
import mousePicSearch from "../Mouse/assets/mouseShortTailSearch.png"


function Menu({ generateMouse }) {

    const [popups, setPopups] = useState(false);

    const pathClickListener = (event) => {
        console.log(event.target.id);
        if (event.target.id === "leftPath"){
            generateMouse();
        }
    }

    const popup = () => {
        popups ? setPopups(false) : setPopups(true);
    }

    useEffect(()=>{
        if (popups){
            document.getElementById("mouseButtonShadow").style.boxShadow = "0px 0px 100px 90px rgb(252, 255, 70)";
        } else {
            document.getElementById("mouseButtonShadow").style.boxShadow = "0px 0px 30px 10px rgb(252, 255, 70)";
        }
    }, [popups])


    return <nav>

<button id="mouseButtonShadow"></button>
        <button id="mouseButton" onClick={popup} >
            {!popups && <img id="mousePic" src={mousePic} alt="Mouse Icon"></img>}
        </button>
        {popups && <img id="mousePicPlus" src={mousePicPlus} alt="Mouse Icon"></img>}
        {popups && <img id="mousePicSearch" src={mousePicSearch} alt="Mouse Icon"></img>}
        {popups && <svg id="menu" xmlns="http://www.w3.org/2000/svg"
            width="0.955in" height="0.985in"
            viewBox="0 0 453 471">
            <path id="leftPath"
                onClick={pathClickListener}
                fill="greenyellow" stroke="black" strokeWidth="0"
                d="M 0.00,320.00
           C 11.98,312.50 13.76,309.83 28.00,303.31
             48.46,293.94 66.84,292.07 89.00,293.04
             99.09,293.48 113.58,297.47 123.00,301.20
             126.52,302.60 133.52,306.94 136.91,305.19
             139.36,303.93 150.31,290.12 153.00,287.00
             153.00,287.00 191.59,241.00 191.59,241.00
             191.59,241.00 300.92,111.00 300.92,111.00
             300.92,111.00 332.08,74.00 332.08,74.00
             336.54,68.66 344.88,60.21 347.00,54.00
             347.00,54.00 332.00,43.69 332.00,43.69
             317.67,34.36 300.90,25.50 285.00,19.20
             217.71,-7.45 141.59,-7.01 75.00,21.72
             54.12,30.73 35.08,42.10 17.00,55.88
             13.18,58.80 2.15,67.00 0.60,71.04
             -0.12,72.89 0.00,75.98 0.00,78.00
             0.00,78.00 0.00,320.00 0.00,320.00 Z" />
             <path id="rightPath"
             onClick={pathClickListener}
                fill="greenyellow" stroke="black" strokeWidth="0"
                d="M 378.00,83.00
           C 378.00,83.00 324.15,145.00 324.15,145.00
             324.15,145.00 223.72,260.00 223.72,260.00
             223.72,260.00 181.72,308.00 181.72,308.00
             178.98,311.15 166.91,324.05 166.30,327.00
             165.55,330.61 172.80,337.01 175.19,340.00
             182.95,349.68 189.23,360.47 193.80,372.00
             207.35,406.22 204.09,437.77 190.00,471.00
             190.00,471.00 357.00,471.00 357.00,471.00
             359.09,471.00 362.06,471.12 364.00,470.40
             367.88,468.97 378.57,457.54 381.96,454.00
             400.36,434.77 415.53,410.82 427.24,387.00
             463.88,312.50 461.19,220.71 424.25,147.00
             416.45,131.45 406.96,116.77 396.35,103.00
             391.45,96.65 384.38,87.58 378.00,83.00 Z" />
        </svg>}

    </nav>
}

export default Menu;