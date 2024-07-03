import './App.css';
import React, {useEffect, useState} from 'react'
import { Contact } from './components/Contact'
import { Nav } from './components/Nav' 
import { Home } from './components/Home'
import { Portfolio } from './components/Portfolio'
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
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
