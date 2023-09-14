import React, {useState} from "react";

export const MyProp1 = () => {
    const [greeting, setGreeting] = useState('Welcome to Vietcombank');
    const [isShow, setShow] = useState(true);

    const handleToggle =() => {
        setShow(!isShow);
    };

    const handleChange = (event) => {
        setGreeting(event.target.value);
    };

    return (
        <div>
            <button onClick={handleToggle} className="btn btn-primary">
                Ẩn hiện
            </button>
            <input type="text" value={greeting} onChange={handleChange}/>

            {isShow ? <Welcome text = {greeting}/> : null}
        </div>
    );

    
}

const Welcome = ({text}) => {
    return <h1>{text}</h1>;
}