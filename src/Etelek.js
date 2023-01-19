import {useEffect, useState} from "react";

function Etelek() {
    const [etelek, setEtelek] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:9000/json')
            .then(response => response.json())
            .then(data => setEtelek(data))
    }, [])
    return (
            etelek.map((etel, index) => (
                <div key={index}>
                    <h1>{etel.name}</h1>
                    <img className="kep" src={etel.photoUrl} alt={etel.name} />
                        <p>{etel.description}</p>
                </div>
            ))
    );
}

export default Etelek;