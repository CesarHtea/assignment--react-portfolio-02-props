import React, { Component } from 'react';
import DegreeHistory from './components/DegreeHistory'
import SkillsList from './components/SkillsList'
import Job from './components/Job'

class App extends Component {
  render() {
  	const listaSkills = this.props.skills
   	// console.log(listaSkills)
    const listaDegree = this.props.eduList
    // console.log(listaDegree)
    const listaWorks = this.props.jobsList
  	// console.log(listaWorks)
  	return (
      <div className="App">
      	<SkillsList listaSkills={listaSkills} />           	
        <DegreeHistory listaDegree={listaDegree} />
        <Job listaWorks={listaWorks}/>
      </div>
    );
  }
}

export default App;
