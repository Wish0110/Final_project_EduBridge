import React from 'react';
import NavbarComponent from './navbar';

function Home() {
  return (
    <div>
      <NavbarComponent />

      <header style={{ backgroundImage: `url('your-banner-image-url')` }}>
        <h1>Welcome to Our Website!</h1>
      </header>

      <main>
        <p>This is a description of our website. Here you can find all sorts of information about our products and services.</p>

        <button>Map</button> {/* This is the "Map" button */}
      </main>

      <footer>
        &copy; 2023 Your Company Name
      </footer>
    </div>
  );
}

export default Home;