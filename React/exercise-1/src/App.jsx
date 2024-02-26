import React, { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it will run only once on component mount

  return (
    <div>
      {data.map(post => (
        <Card key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default App;
