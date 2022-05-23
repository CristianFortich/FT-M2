import React from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
};

export default function  Form() {
  const [input, setInput] = React.useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = React.useState({});

  function handleInputChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  return (
      <div>
        <form action="">
          <label>Username:</label>
          <input placeholder='carlos@yahoo.es' className={errors.username && 'danger'} type="text" name="username" onChange={handleInputChange} value={input.username}/><br />
          {errors.username && (
            <p className="danger">{errors.username}</p>
          )}
          <label>Password:</label>
          <input placeholder='use at least a number' className={errors.password && 'danger'} type="password" name="password" onChange={handleInputChange} value={input.password}/><br />
          {errors.password && (
            <p className="danger">{errors.password}</p>
          )}
          <input type="submit" value="Submit" />
        </form>
      </div>
  )
}
