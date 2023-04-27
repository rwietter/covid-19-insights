/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react';

const usuario = {
  name: 'John',
  age: 20
};

interface User {
  name: string
  age: number
}

const Hello = () => {
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    setUser(usuario);
  }, []);

  return (
    <div>
      <h1>User: {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <button
        onClick={() => {
          setUser(state => {
            return {
              ...state,
              age: state.age + 1
            };
          });
        }}
      >Atualizar</button>
    </div>
  );
};

export default Hello;
