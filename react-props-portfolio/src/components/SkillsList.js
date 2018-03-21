import React, { Component } from 'react';

class SkillsList extends Component{
	render() {
		const listaSkills = this.props.listaSkills
		// console.log(listaSkills)
		return (
			<section>
				<h4>Skills</h4>
					<div className="skills-list">
						{ listaSkills.map(function(skill) {
					return (
    						<span className="skills-list__single">{skill}</span>  						
						)
						})}
					</div>
			</section>
		);
	}
}

export default SkillsList
