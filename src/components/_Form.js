import React from "react";
import { Checkbox, Form } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import axios from "axios";

const onSub = () => {
  const first = document.querySelector(".form-first-name");
  const last = document.querySelector(".form-last-name");
  const email = document.querySelector(".form-email");

  const newCustomer = {
    email: email.value,
    password: first.value + "" + last.value,
    first_name: first.value,
    last_name: last.value,
  };

  console.log(newCustomer);
  addCustomer(newCustomer);
};
const addCustomer = (customer) => {
  axios
    .post("https://fastserver-sm.herokuapp.com/users", {
      email: customer.email,
      password: customer.password,
      first_name: customer.first_name,
      last_name: customer.last_name,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const _Form = () => {
  return (
    <div>
      <Form>
        <Form.Field inline>
          <label>First Name</label>
          <input placeholder="First Name" className="form-first-name" />
          <label> &nbsp; &nbsp; &nbsp;Last Name &nbsp;</label>
          <input placeholder="Last Name" className="form-last-name" />
        </Form.Field>
        <Form.Group inline>
          <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            placeholder="eg. moshe_mishaan@yahoo.com"
            className="form-email"
          />
        </Form.Group>

        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions, Sign me up!" />
        </Form.Field>
        <Button type="submit" onClick={onSub}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default _Form;
