//import './App.css';
import React, {ReactDOM, useState, useEffect} from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import { useHistory } from 'react-router-dom';





const Dart = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


const fetchData = async () => {
  setLoading(true);
  const result = await axios.get('http://127.0.0.1:8000/Dart');
  setData(result.data);
  setLoading(false);
}



  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">DART GAME</h1>
      <h6 className="card text-white bg-primary mb-3">DART GAME</h6>
     <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
      <span className="card-text">
        <input className="mb-2 form-control titleIn"  placeholder='Title'/>
        <input className="mb-2 form-control desIn"   placeholder='Description'/>
      <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}} onClick={fetchData}>Add Task</button>
      </span>
      <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
      <div >
      </div>
      </div>
      <span className="card-text">
      <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}} onClick={fetchData}>Fetch Data</button>
      </span>
      {loading ? <p>Loading...</p> :
      <ul>
      {data.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>}
      
</div>
  );
}
export default Dart;
