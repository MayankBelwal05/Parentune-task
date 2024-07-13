import React, { useEffect, useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import { fetchDailyFocus } from './api/api';
import './App.css';

const App =() => {

  const [sections, setSections] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDailyFocus();
        setSections(data.content.data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getData();
  }, []);

  const handleScroll = (index) => {
    refs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Sidebar sections={sections} handleScroll={handleScroll} />
      <div className="content">
        <h2>initial demo</h2>
        {sections.map((section, index) => (
          <div key={index} ref={(el) => (refs.current[index] = el)}>
            <Card
              image={section.thumb}
              title={section.title}
              description={section.description}
              duration={section.duration}

            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
