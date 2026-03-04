import React from 'react';
import CoachList from './components/CoachList';
import SearchCoach from './components/SearchCoach';
import AddCoach from './components/AddCoach';

function App() {
  return (
    <div className="App">
      <h1>Coach Management</h1>
      <AddCoach />
      <hr />
      <SearchCoach />
      <hr />
      <CoachList />
    </div>
  );
}

export default App;