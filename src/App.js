import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from './routes/routes'
function App() {
  return (
    <Router>
      <Container fluid={'sm'}>
        
            <MainRoutes />
        
      </Container>
    </Router>
  );
}

export default App;
