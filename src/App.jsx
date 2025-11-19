
import React from 'react';
import ReadingBubble from './ReadingBubble';

function App() {
  return (
    <div>
      <ReadingBubble />

      <div style={{ maxWidth: '700px',left: '50px', margin: '0 auto', padding: '50px 20px'}}>
        <h1>The History of Web Design</h1>
        <p><i>Scroll down to watch the bubble fill up...</i></p>
        
        {[...Array(50)].map((_, i) => (
          <p key={i} style={{ marginBottom: '20px', lineHeight: '1.6' }}>
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;