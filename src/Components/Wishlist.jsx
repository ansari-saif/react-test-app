import React, { useState } from 'react'

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');
  function submitHandler(e) {
    e.preventDefault();
    setItems([...items, item]);
    setItem("");
  }
  return (
    <div>
      <h1>Wishlist</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={item} onChange={e => setItem(e.currentTarget.value)} />{' '}<button>ADD</button>

      </form>
      {
        items.length <=3 ? items.map((e, i) => <div key={i}>{e}</div>) : <h3>You cannot add more than 3 items to wishlist</h3>
      }
    </div>
  )
}

export default Wishlist;