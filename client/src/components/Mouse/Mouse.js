import mice from "./assets";
import { useEffect, useState } from "react";
let leftPosition = {}
let mouseIntervals = {};

function Mouse({ backgroundXY, num }) {

    if (leftPosition[num] === undefined){
        leftPosition[num] = -100
    }
    const [ image, setImage ] = useState(Math.floor(Math.random() * mice.length));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const numListen = (event) => {
        try {
            console.log("INSIDE numListen");
            console.log(leftPosition);
            if (event.key === "ArrowRight") {
                if (backgroundXY.x < 100) {
                    for (const mouse in leftPosition){
                        console.log("MOVING MOUSE", mouse);
                        leftPosition[mouse] = leftPosition[mouse] - 1;
                    }
                }
            } else if (event.key === "ArrowLeft") {
                if (backgroundXY.x > 0) {
                    console.log(leftPosition);
                    for (const mouse in leftPosition){
                        console.log("MOVING MOUSE", mouse);
                        leftPosition[mouse] = leftPosition[mouse] + 1;
                    }
                }
            }
        } catch (e) {
            console.log("Error from numListen(Mouse.js):");
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
        console.log("STARTING MOUSE NUM", num);
        mouseIntervals[num] = setInterval(function(){
            try {
                // console.log(leftPosition[num], "inside mouse movement");
                if (leftPosition[num] < 250){
                    // console.log("MOUSE NUM", num);
                    leftPosition[num] = leftPosition[num] + 1;
                } else if (leftPosition[num] === undefined){
                    leftPosition[num] = -100;
                } else {
                    console.log("TRYING TO DELETE MOUSE NUMBER", num);
                    document.getElementById(num).style.display = "none";
                    clearInterval(mouseIntervals[num]);
                }
            } catch (e) {
                console.log("Error from mouseIntervals: ", num, "(Mouse.js)");
                console.log(e);
            }
        }, 50)
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", numListen)
        return () => {
            document.removeEventListener("keydown", numListen);
        };
    }, [numListen]);

    return <img id={num} src={mice[image]} style={{
        width: 100+"px",
        position:"absolute", 
        bottom: 100+ "px",
        left: leftPosition[num] + "vw"}} alt="Mouse Running"></img>
}

export default Mouse