import './App.css';
import React, {useEffect, useState} from 'react'
import { Nav } from './components/Nav' 
import { Home } from './components/Home'
import { BackgroundSwitch } from './components/BackgroundSwitch';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  }, [])

  return (
    <div className="App max-h-screen">
      <BackgroundSwitch visible={loading} onClose={() => setLoading(false)} />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
