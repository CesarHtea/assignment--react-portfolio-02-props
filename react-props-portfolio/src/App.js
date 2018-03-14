import React, { Component } from 'react';
import DegreeHistory from './components/DegreeHistory'
import SkillsList from './components/SkillsList'
import Job from './components/Job'

class App extends Component {
  render() {
    return (
      <div className="App">
       	<SkillsList />
        <DegreeHistory />
        <Job />

      </div>
    );
  }
}

export default App;
