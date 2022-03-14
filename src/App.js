import './App.css';
import Vegetables from './Components/Vegetables';
import Wishlist from './Components/Wishlist';

function App() {
  return (
    <div className='App'>
      <Wishlist />
      <hr />
      <Vegetables />
    </div>
  );
}

export default App;
