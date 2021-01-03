import birds from "./assets";
import { useEffect, useState } from "react";


function Bird() {

    const [ image, setImage ] = useState(Math.floor(Math.random() * birds.length));

    useEffect(()=>{
        setTimeout(function(){
            if (image < birds.length - 1){
                setImage(image+1);
            } else {
                setImage(0);
            }
        }, 1000)
    }, [image])

    return <img src={birds[image]} alt="Bird in flight"></img>
}

export default Bird