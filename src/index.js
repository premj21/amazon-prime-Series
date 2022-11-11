import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata"; 

 ReactDOM.render(
 <>
 <h1 className="heading_style">List of Amazon-Prime Series</h1>
  {Sdata.map((val)=>(
<Card 
  imgsrc= {val.imgsrc}
   title = {val.title}
   sname = {val.sname}
  link = {val.links}
  />
  ))}
 </>,
  document.getElementById('root')
);
