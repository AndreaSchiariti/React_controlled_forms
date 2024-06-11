import { useState } from "react";

function dataObject() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login({ onLogin }) {
  const [data, setData] = useState(dataObject());

  function handleData(event) {
    const name = event.target.name;
    const value = event.target.value;
    const type = event.target.type;
    const checked = event.target.checked;

    setData((input) => {
      return {
        ...input,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    onLogin(data);
  }

  function handleReset() {
    setData(dataObject())
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        onChange={handleData}
        type="text"
        name="username"
        value={data.username}
      />
      <input
        onChange={handleData}
        type="password"
        name="password"
        value={data.password}
      />
      <input
        onChange={handleData}
        type="checkbox"
        name="remember"
        value={data.checked}
      />

      <button disabled={!data.username && data.username}>
        Login
      </button>
      <button type="button" onClick={handleReset}>Reset</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
