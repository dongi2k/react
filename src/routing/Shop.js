import React, {useState, useEffect} from 'react';
import '../App.css';
import { useNavigate, useParams, Link } from 'react-router-dom';

function Shop() {

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=10`
            ).then(response => response.json())

            console.log(response)
            setData(response);
        }
        getData();
    }, [])

    const [data, setData] = useState([]);


    let navigate = useNavigate();
  //  let { id }= useParams();

    return (
        <div >
            <h1>Shop Page</h1>
            <Link to="`/shop/${data.id`" key="data.id">{data.map(data => <h1>{data.title}</h1>)}</Link>

            <button onClick = {() => { navigate("/about")}}> Go To About Page</button>
        </div>
    );
}

export default Shop;
