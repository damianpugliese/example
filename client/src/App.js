import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Header from './components/Header';

const App = () => {

  const [items, setItems] = useState([]);
  const [itemToSearch, setItemToSearch] = useState('');

  const fetchItems = async q => {
    const itemsResponse = await axios(`/items?q=${q}`);
    const items = itemsResponse.data.results;
    return items;
  }

  const handleChangeInput = e => {
    const { value } = e.target;
    setItemToSearch(value);
  }

  const handleClick = async () => {
    const items = await fetchItems(itemToSearch);
    setItems(items);
  }

  return (
    <div className="App">
      <Header link1="Link 1"/>
      <input value={itemToSearch} onChange={handleChangeInput}></input>
      <button onClick={handleClick}>Search</button>
      {items && items.map(item => <h5>{item.id}</h5>)}
    </div>
  );
}

export default App;
