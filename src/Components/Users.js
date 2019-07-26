import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Users() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("https://api.github.com/users?since=135");
    const items = await data.json();
    // console.log(items);
    setItems(items);
  };
  return (
    <div>
      <h1>Users</h1>
      {items.map(item => (
        <h3 key={item.node_id}>
          <Link to={`users/${item.login}`}>{item.login}</Link>
        </h3>
      ))}
    </div>
  );
}
