import React from 'react'

function App() {

  const isNotMarried = true

  const comments = [
    {id: 1, text:'Hello All'},
    {id: 2, text:'Good'},
    {id: 3, text:'Excellent'},
  ]
  return (
    <div className='comments'>
      { comments.map((comment, index) => (
        <li key={index}>{comment.text }</li>
      )) }
      { isNotMarried && (
        <p>When you are getting married Boy!!</p>
      )}
    </div>
  );
}

export default App;
