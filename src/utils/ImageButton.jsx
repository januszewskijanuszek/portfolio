import React from 'react'
import './imageButton.css'
import { FaCat } from "react-icons/fa";

function ImageButton({Icon=false, href='#', label="default", text="", download = false}){
    if(Icon === null){
        return(
            <a className='image-button' href={href} aria-label={label} download={download || undefined}>
                <TextDisplay text={text} />
            </a>
        );
    } else{
        return(
            <a className='image-button' href={href} download={download || undefined}>
                <ImageDisplay Icon={Icon} />
                <TextDisplay text={text} />
            </a>
        );
    }
    
}

function ImageDisplay({Icon}){
    return(
        <div className='image-button-image'>
            <Icon/>
        </div>
    );
}

function TextDisplay({text='default'}){
    return (
        <div className='image-button-text'>
            {text}
        </div>
    );
}

export default ImageButton;