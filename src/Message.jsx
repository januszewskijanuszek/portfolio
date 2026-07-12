import {useState} from 'react'


function Message({sampleText = 'Default'}){

    const [value, setValue] = useState(10);

    return (
    <div>
        <h1 onClick={() => setValue(value + 1)} className="clickable">
            Click here
        </h1>
        <h1>{value} {sampleText} {name}</h1>
    </div>
    )
}

export default Message;