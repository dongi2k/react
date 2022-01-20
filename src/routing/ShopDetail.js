import React, {useState, useEffect} from 'react';
import '../App.css';
import { useNavigate, useParams, Link } from 'react-router-dom';

function Item() {

    useEffect(() => {
        fetchItem();
    }, []);

    const [data, setItem] = useState([]);
    const fetchItem = async () => {
        const fetchItem = await fetch(``)
    };

        return (
            <div>
                <h1>Item</h1>
            </div>
        )

}

export default Item;
