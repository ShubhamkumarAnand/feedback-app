import React from 'react'

function App() {

  const comments = [
    {id: 1, text:'Hello All'},
    {id: 2, text:'Good'},
    {id: 3, text:'Excellent'},
  ]
  return (
    <div className='comments'>
      { comments.map((comment, index) => (
        <li key={index}>{comment.text }</li>
      ))}
    </div>
  );
}

export default App;
