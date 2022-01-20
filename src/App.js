import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Nav from './routing/Nav';
// import About from './routing/About';
// import Shop from './routing/Shop';
// import ShopDetail from './routing/ShopDetail';
// import StateTutorial from "./hooks/StateTutorial";
// import ReducerTutorial from "./hooks/ReducerTutorial"
// import EffectTutorial  from "./hooks/EffectTutorial";
// import RefTutorial from "./hooks/RefTutorial";
import LayoutEffectTutorial from "./hooks/LayoutEffectTutorial";
import ImperativeHandle from "./hooks/ImperativeHandle";

function App() {
    return (
        <div className="App">
        <ImperativeHandle />
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
