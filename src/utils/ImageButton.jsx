import React from 'react'
import './imageButton.css'
import { FaCat } from "react-icons/fa";

function ImageButton({Icon=false, href='#', label="default", text="", download = false, className='image-button', onClick = () => {}}){
    if(Icon === null){
        return(
            <a className={className} href={href} aria-label={label} download={download || undefined} onClick={onClick}>
                <TextDisplay text={text} />
            </a>
        );
    } else if(text === ""){
        return(
            <a className={className} href={href} download={download || undefined} onClick={onClick}>
                <ImageDisplay Icon={Icon} />
            </a>
        )
    }
    else{
        return(
            <a className={className} href={href} download={download || undefined} onClick={onClick}>
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