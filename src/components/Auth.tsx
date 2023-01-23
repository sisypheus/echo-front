import { useState } from "react";

interface Props {
  type: "login" | "register";
  onSubmit: (e: any) => any;
}

const Auth = ({ type, onSubmit }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "username") setUsername(value);
    if (name === "displayName") setDisplayName(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Display name"
        name="displayName"
        onChange={handleChange}
      />
      <button type="submit">{type}</button>
    </form>
  );
};

export default Auth;
