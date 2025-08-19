import React, { useState } from 'react';
import { Home } from '../components/Home';

const users = [
  {name:"Aleksandr"},
  {name:"Anthony"},
]

export const HomeSection = ()=> {
  const [user, setUser] = useState({name:"Aleksandr"});

  const onChangeUser = () => {
    const newUser = users.find((u) => u.name !== user.name) || users[0];
    setUser(newUser)
  }

  return (
    <Home user={user} onChangeUser={onChangeUser}/>
  );
}