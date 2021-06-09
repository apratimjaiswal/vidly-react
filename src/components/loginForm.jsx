import React from "react";
import { Redirect } from "react-router";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  //username = React.createRef();

  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);

      toast.success("Login Successful!");

      // this.props.history.push("/");
      // window.location = "/"; //  This will cause Full Reload of the Application
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  /*validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required.";
      //..
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
      //..
    }
  };*/

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    // const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {/* <div className="form-group">
            <label htmlFor="username" className="custom-form-pad">
              Username
            </label>
            <input
              autoFocus
              // ref={this.username}
              value={account.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              className="form-control custom-form-pad"
            />
          </div> */}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
