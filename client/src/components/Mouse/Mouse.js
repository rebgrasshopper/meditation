import mice from "./assets";
import { useEffect, useState } from "react";
let leftPosition = -100
let mouseInterval;

function Mouse({ backgroundXY }) {

    const [ image, setImage ] = useState(Math.floor(Math.random() * mice.length));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const keyListen = (event) => {
        try {
            if (event.key === "ArrowRight") {
                if (backgroundXY.x < 100) {
                    leftPosition = leftPosition - 2;
                }
            } else if (event.key === "ArrowLeft") {
                if (backgroundXY.x > 0) {
                    leftPosition = leftPosition + 1;
                }
            }
        } catch (e) {
            console.log("Error from keyListen(Mouse.js):");
            console.log(e);
        }
    }

    useEffect(()=>{
        setTimeout(function(){
            if (image < mice.length - 1){
                setImage(image+1);
            } else {
                setImage(0);
            }
        }, 50)
    }, [image])

    useEffect(()=>{
        mouseInterval = setInterval(function(){
            console.log(leftPosition, "inside mouse movement");
            if (leftPosition < 250){
                leftPosition = leftPosition + 1;
            } else {
                document.getElementById("mouse").style.display = "none";
            }
        }, 50)
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", keyListen)
        return () => {
            document.removeEventListener("keydown", keyListen);
        };
    }, [keyListen]);

    return <img id="mouse" src={mice[image]} style={{
        width: 100+"px",
        position:"absolute", 
        bottom: 100+ "px",
        left: leftPosition + "vw"}} alt="Mouse Running"></img>
}

export default Mouse