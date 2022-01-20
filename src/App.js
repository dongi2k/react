import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './routing/Nav';
import About from './routing/About';
import Shop from './routing/Shop';
import ShopDetail from './routing/ShopDetail';
import StateTutorial from "./hooks/StateTutorial";
import ReducerTutorial from "./hooks/ReducerTutorial"
import EffectTutorial  from "./hooks/EffectTutorial";

function App() {
    return (
        <div className="App">
        <EffectTutorial />
        </div>
        // <Router>
        //     <div className="App">
        //         <Nav />
        //
        //         <Routes>
        //
        //             <Route exact path="/" element={<Home />} />
        //             <Route excat path="/about" element={<About />} />
        //             <Route exact path="/shop/" element={<Shop />} />
        //             <Route path="/shop/:id" element={<ShopDetail />}/>
        //
        //         </Routes>
        //     </div>
        // </Router>

    );
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
)

export default App;
