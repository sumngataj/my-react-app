import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const removeStylesheet = (href) => {
    const styleSheets = document.styleSheets;

    for (let i = 0; i < styleSheets.length; i++) {
      const styleSheet = styleSheets[i];

      if (styleSheet.href && styleSheet.href.includes(href)) {
        document.head.removeChild(styleSheet.ownerNode);
        break;
      }
    }
  };
  const handleLogin = () => {
    // Simulate a login request (replace with actual authentication logic)
    // For simplicity, consider the user as logged in if the username and password are not empty
    if (username == "patrick" && password == "canama") {
      // Call the onLogin callback passed from the parent component
      onLogin();
      removeStylesheet("Login.css");
    }
  };
  return (
    <div class="container" id="container">
      <div class="form-container sign-in">
        <form action="/">
          <h1>Sign In</h1>
          <div class="social-icons">
            <span>GOOD TO SEE YOU</span>
            {/* <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a> */}
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="{{ route('Home') }}">Forget Your Password?</a>
          <button type="submit" onClick={handleLogin}>
            Sign In
          </button>
        </form>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-right">
              <h1>HI WELCOME!</h1>
              {/* <h2>To Art Gallery</h2> */}
              {/* <button class="hidden" id="register">View</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
