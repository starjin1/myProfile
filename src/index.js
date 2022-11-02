import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Project_sub from './project_component/Project_sub';
import ScrollTop from './component/ScrollTop';
import Project_sub02 from './project_sub_component/Project_sub02';
import Project_sub03 from './project_final_component/Project_subbox03';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollTop />
    <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/project_sub' element={<Project_sub />}></Route>
        <Route path="/project_sub02" element={<Project_sub02 />}></Route>
        <Route path="/Project_sub03" element={<Project_sub03 />}></Route>
    </Routes>
    </BrowserRouter>

);

