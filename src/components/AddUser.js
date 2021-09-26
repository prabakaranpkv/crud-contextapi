import React, { useContext } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

export default function AddUser() {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Enter Name"
          required
        ></Input>
      </FormGroup>
      <Button type="submit" className="mt-2 ">
        Submit
      </Button>
      <Link to="/" className="btn btn-danger mt-2">
        Cancel
      </Link>
    </Form>
  );
}
