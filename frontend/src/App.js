// App.js
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { AuthProvider } from './components/AuthContext';
import NavTop from './components/Nav-top';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <NavTop />
      <Section />
      <Footer />
    </AuthProvider>
  );
}

export default App;
