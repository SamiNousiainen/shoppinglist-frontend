import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'http://localhost/shoppinglist';


function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(URL)
    .then((response) => {

    }).catch(error => {

    })
  }, [])

  return (
    <div>

    </div>
  );
}

export default App;
