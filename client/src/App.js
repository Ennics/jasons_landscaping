import React, { useEffect, useState } from 'react';

function App() {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    fetch('/api/sample')
      .then((response) => response.json())
      .then((data) => setSamples(data))
      .catch((error) => console.error('Failed to fetch samples', error));
  }, []);

  return (
    <div>
      <h1>Sample Website</h1>
      <ul>
        {samples.map((sample) => (
          <li key={sample._id}>{sample.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
