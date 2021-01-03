import "./assets/style.css";
import { useEffect, useState } from "react";


function View() {

    const [backgroundXY, setBackgroundXY] = useState({
        x: 50,
        y: 50
    });
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

    useEffect(() => {
        document.addEventListener("keydown", keyListen)
        return () => {
            document.removeEventListener("keydown", keyListen);
        };
    }, [keyListen]);

    useEffect(() => {
        console.log("inside backgroundXY useEffect", backgroundXY);
        body.style.backgroundPositionX = `${backgroundXY.x}%`;
    }, [backgroundXY])

    return (
        <div id="container">
            <div id="leftEdge"></div>
            <div id="rightEdge"></div>
        </div>
    )
}

export default View;