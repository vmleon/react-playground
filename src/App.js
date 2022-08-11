import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Labs from './Labs';
import Login from './Login';
import Workshop from './Workshop';

const isLogged = (token) => {
  const logged = token && token.length;
  return logged;
};

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  if (isLogged(token)) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Workshop token={token} setToken={setToken} />}>
            <Route path="/:id" element={<Labs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  } else {
    return <Login token={token} setToken={setToken} />;
  }
}

export default App;
