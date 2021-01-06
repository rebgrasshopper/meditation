import "./assets/style.css";
import Bird from "../Bird/Bird";
import Mouse from "../Mouse/Mouse";
import { useEffect, useState } from "react";


function View() {

    const [backgroundXY, setBackgroundXY] = useState({
        x: 50,
        y: 50
    });
    const [ mice, setMice ] = useState([]);
    const body = document.getElementsByTagName('body')[0];

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const keyListen = (event) => {
        try {
            if (event.key === "ArrowRight") {
                if (backgroundXY.x < 100) {
                    setBackgroundXY({
                        ...backgroundXY,
                        x: backgroundXY.x + 1
                    });
                } else {
                    document.getElementById("rightEdge").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("rightEdge").style.display = "none";
                    }, 500);
                }
            } else if (event.key === "ArrowLeft") {
                if (backgroundXY.x > 0) {
                    setBackgroundXY({
                        ...backgroundXY,
                        x: backgroundXY.x - 1
                    });
                } else {
                    document.getElementById("leftEdge").style.display = "block";
                    setTimeout(function () {
                        document.getElementById("leftEdge").style.display = "none";
                    }, 500)
                }
            }
        } catch (e) {
            console.log("Error from keyListen(View.js):");
            console.log(e);
        }
    }

    const generateMouse = (event) =>{
        event.preventDefault();
        let randomNum = Math.floor(Math.random()*10000);
        if (mice.indexOf(randomNum) < 0){
            setMice(prevState => [...prevState, randomNum]);
        }

    }
    useEffect(() => {
        document.addEventListener("keydown", keyListen)
        return () => {
            document.removeEventListener("keydown", keyListen);
        };
    }, [keyListen]);

    useEffect(() => {
        // console.log("inside backgroundXY useEffect", backgroundXY);
        body.style.backgroundPositionX = `${backgroundXY.x}%`;
    }, [backgroundXY])

    return (
        <div id="container">
            <div id="leftEdge"></div>
            {mice.map(mouse => <Mouse key={mouse} num={mouse} backgroundXY = {backgroundXY}/>)}
            <button 
            style={{position:"absolute", bottom:0+"px"}}
            onClick={generateMouse}>Click for Mouse</button>
            <div id="rightEdge"></div>
        </div>
    )
}

export default View;