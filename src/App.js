import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Navbar, NavbarBrand } from 'reactstrap';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React-Forms</NavbarBrand>
        </Navbar>
        <Form>
          <Row form>
            <Col md={{ size: 4, offset: 3 }} >
              <FormGroup>
                <Label for="appEmail">Email</Label>
                <Input type="email" name="email" id="appEmail" placeholder="Enter your EmailID" />
              </FormGroup>
              <FormGroup>
                <Label for="appPassword">Password</Label>
                <Input type="password" name="password" id="appPassword" placeholder="Enter Password" />
              </FormGroup>
              <Button>Submit</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}