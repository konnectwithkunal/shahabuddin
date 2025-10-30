import React from 'react';

// --- STYLES FOR NAVBAR ---
// This includes only the CSS needed for the Navbar to render correctly.
const NavbarStyles = () => (
  <style>{`
    /* --- Google Font 'Khand' --- */
    @import url('https://fonts.googleapis.com/css2?family=Khand:wght@400;500;600;700&display=swap');

    /* --- Basic Reset (for preview) --- */
    body, html {
        margin: 0;
        padding: 0;
        font-family: 'Khand', sans-serif;
        background-color: #f4f4f4; /* Added background to see the white navbar */
    }

    /* --- Container (needed by navbar) --- */
    .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 20px;
    }

    /* --- Navbar Styles --- */
    .navbar {
        background: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        padding: 20px 0;
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .navbar .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar .logo {
        font-size: 28px;
        font-weight: 700;
        color: #d4a100; /* Jan Suraaj Yellow */
        text-decoration: none;
    }

    .navbar ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    .navbar ul li a {
        color: #333;
        text-decoration: none;
        padding: 10px 15px;
        font-weight: 600;
        font-size: 18px;
        transition: color 0.3s;
    }

    .navbar ul li a:hover {
        color: #d4a100;
    }

    /* --- Responsive Styles (for navbar) --- */
    @media (max-width: 768px) {
        .navbar .container {
            flex-direction: column;
        }
        .navbar ul {
            margin-top: 10px;
        }

          .navbar {
        
        padding: 10px 0;
        
    }
    }
    
    @media (max-width: 480px) {
        .navbar ul li a {
            padding: 5px 8px;
            font-size: 16px;
        }
    }
  `}</style>
);


// --- Navbar Component ---
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo">डॉ. मो० शहाब उद्दीन</a>
        <ul>
          <li><a href="#about">परिचय</a></li>
          <li><a href="#career">सफर</a></li>
          <li><a href="#gallery">गैलरी</a></li>
          <li><a href="#contact">संपर्क</a></li>
        </ul>
      </div>
    </nav>
  );
};

// --- Main App Component (for previewing) ---
// This renders *only* the Navbar.
const App: React.FC = () => {
  return (
    <React.Fragment>
      <NavbarStyles />
      <Navbar />
    </React.Fragment>
  );
};

export default App;
