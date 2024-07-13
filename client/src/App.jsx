import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import fetchDailyFocus from './api/api';
import './App.css';

const App = () => {
  const [sections, setSections] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    fetchDailyFocus()
      .then(content => setSections(content))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleScroll = (index) => {
    refs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <h1 className="headline">Today's Focus</h1>
    <div className="app-container">
      <div className="content">
        {sections.map((section, index) => (
          <div key={index} ref={(el) => (refs.current[index] = el)}>
            {section.data.map((item, idx) => (
              <Card
                key={idx}
                image={item.thumb}
                title={item.custom_title || item.title}
                description={item.summary || item.description}
                duration={item.duration}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
    </>
    );
};

export default App;
