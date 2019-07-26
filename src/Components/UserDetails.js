import React, { useEffect, useState } from "react";

export default function UserDetails({ match }) {
  useEffect(() => {
    fetchItem();
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.github.com/users/${match.params.id}`
    );
    const data = await fetchItem.json();
    console.log(data);
  };

  return (
    <div>
      <h1>User Details</h1>
    </div>
  );
}
