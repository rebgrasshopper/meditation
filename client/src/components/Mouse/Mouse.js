import mice from "./assets";
import { useEffect, useState } from "react";

function Mouse({ num }) {

    const [ image, setImage ] = useState(Math.floor(Math.random() * mice.length));
    const [ leftPosition, setLeftPosition ] = useState(0);

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
        setTimeout(function(){
            console.log(leftPosition);
            if (leftPosition < 100){
                setLeftPosition(leftPosition+1);
            } else {
                document.getElementById("mouse").style.display = "none";
            }
        }, 50)
    }, [leftPosition])

    return <img id="mouse" src={mice[image]} style={{
        width: 100+"px",
        position:"absolute", 
        bottom: 100+ "px",
        left: leftPosition + "vw"}} alt="Mouse Running"></img>
}

export default Mouse