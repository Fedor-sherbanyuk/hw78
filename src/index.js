import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from "./components/Card";


const root1 = ReactDOM.createRoot(document.getElementById('root1'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root1.render(
    <Card title='MIKI'/>
);
root2.render(
    <Card text='DUCK'/>
);
root3.render(
    <Card title='GOFFI'
          text='PINK'/>
);