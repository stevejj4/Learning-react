import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both fields are required!");
      return;
    }
    setError(""); // Clear errors
    alert(`Welcome, ${username}!`); // Simulate login
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: "300px", margin: "50px auto", textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", background: "#f9f9f9" },
  title: { fontSize: "24px", marginBottom: "10px" },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ddd", fontSize: "16px" },
  button: { padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },
  error: { color: "red", fontSize: "14px" }
};
