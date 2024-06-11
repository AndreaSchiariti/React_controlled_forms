import { useState } from "react";

function dataObject() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login() {
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

  return (
    <form>
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

      {/* Inserito per controllo */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}
