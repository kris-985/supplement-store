import { useState } from 'react';

export const Account = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ nickname: 'JohnDoe' });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-light">
            <div className="card-body text-center">
              {/* Add fragment */}
              {user ? (
              <>
                  <h2 className="card-title mb-3">Welcome, <span className="text-primary">{user.nickname}</span>!</h2>
                  <p className="card-text text-muted">You are now logged in. Explore our products and enjoy your shopping!</p>
                  <button className="btn btn-secondary mt-3" onClick={() => setUser(null)}>Logout</button>
                </>
              ) : (
                <>
                  <h2 className="card-title mb-3">Login</h2>
                  <p className="card-text text-muted">Please log in to access your account.</p>
                  <button className="btn btn-primary" onClick={handleLogin}>Log In</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};