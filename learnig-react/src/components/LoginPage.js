import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Reset error on each submission attempt

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);

    // Simulate login API request (replace with real API call)
    setTimeout(() => {
      setLoading(false);
      alert("Login successful!"); // Replace with proper authentication handling
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
        {/* Logo & Title */}
        <h1 className="text-2xl font-semibold mb-6">📊 Report Assistant</h1>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Username/Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Email"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Password"
          />

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-start text-sm">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-600">
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-md text-white ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } transition`}
            aria-label="Login Button"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Links: Forgot Password & Sign Up */}
        <div className="flex justify-between text-sm mt-6">
          <a href="/forgot-password" className="text-blue-500 hover:underline" aria-label="Forgot Password">
            Forgot Password?
          </a>
          <a href="/sign-up" className="text-blue-500 hover:underline" aria-label="Sign Up">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
