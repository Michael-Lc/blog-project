import { useRef, useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignInForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setError("")
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button className="w-100 my-2" type="submit">Sign In</Button>
              </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    </Container>
  );
}

