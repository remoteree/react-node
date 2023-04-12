import React, {useState, useEffect} from 'react'
import { Container, Header } from 'semantic-ui-react'
import { makeCall } from './apiHelper';

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
          const result = await makeCall({}, 'test', 'GET')
          if (!result || result.error) {
              console.error("Error: App#useEffect");
          } else {
            setMessage(result.message)
          }
      } catch (e) {
          console.error("Error: App#useEffect", e);
      }
  }
  fetchData()
  }, [])
  return (
    <div className="App">
      <Container>
        <Header as='h2'>Message from Server</Header>
        <p>
          { message }
        </p>
      </Container>
    </div>
  );
}

export default App;
