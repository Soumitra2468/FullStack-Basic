import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [joke,setJoke] = useState([])
  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get('/api/jokes')
        setJoke(response.data)
      } catch (error) {
        console.error('Error fetching jokes:', error)
      }
    }

    fetchJokes()

  }, []);
  // useEffect(() => {
  return (
    <>
      <h1>JOKES:{joke.length}</h1>
      {
        joke.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>:- {joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
