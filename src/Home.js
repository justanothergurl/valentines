import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './Home.css';

const Home = () => {

    const [clickCount, setClickCount] = useState(0);

    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
    };
    const fontSize = `${1 + clickCount * 2}em`;

	const navigate = useNavigate();

	return (
        <div className="App">
            <header className="App-header">
                <h1 id ="q"> Will you be my valentine? </h1>
                <button id="Yes" onClick={() => navigate("/yes")} style={{ fontSize: fontSize }} title = "it better be your choice :)">
                    Yes
                </button>
            <button id ="No" onClick={handleButtonClick} title = "count your days bitch">
                    No
                </button>
            </header>
        </div>
	);
};

export default Home;
