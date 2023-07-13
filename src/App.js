import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Header>
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
