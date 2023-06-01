import React from 'react';

function LoginPage() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Username/Email"
            style={{ marginBottom: '10px', padding: '5px' }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{ marginBottom: '10px', padding: '5px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
            Log in
          </button>
        </form>
      </div>
    );
  }

export default LoginPage;
