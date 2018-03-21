import React, { Component } from 'react';

class Job extends Component {
  render() {
    const listaWorks = this.props.listaWorks
    // console.log(listaWorks[0])
    return (
      <section>
        <h4>Work Experience</h4>

        <div className="job-timeline">
          
          { listaWorks.map(function(work) {
            return (
              <div className="job">
                  <div className="job__years">
                  <h6 className="job__end">{work.years.end}</h6>
                  <h6 className="job__start">{work.years.start}</h6>
                </div>
                <h5 className="job__title">{work.title}</h5>
                <h5 className="job__company">{work.company}</h5>
                <p className="job__description">{work.description}</p>
              </div>
            );
          })}

        </div>
      </section>    
    );
  }
}

export default Job;  