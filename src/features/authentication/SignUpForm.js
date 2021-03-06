import { useRef, useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignUpForm() {
  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    } else setError("")
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
      <div className="w-100" style={{maxWidth: '400px'}}>
        <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" ref={nameRef} required />
                </Form.Group>
                <Form.Group id="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" ref={usernameRef} />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button className="w-100 my-2" type="submit">Sign Up</Button>
              </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to='/signin' className='text-primary'>Log In</Link>
        </div>
      </div>
    </Container>
  );
}
