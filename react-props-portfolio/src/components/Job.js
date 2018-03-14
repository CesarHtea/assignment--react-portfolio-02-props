import React, { Component } from 'react';

class Job extends Component {
  render() {
    return (
      <section>
        <h4>Work Experience</h4>

        <div className="job-timeline">
          
          <div className="job">
            <div className="job__years">
              <h6 className="job__end">NOW</h6>
              <h6 className="job__start">2016</h6>
            </div>
            <h5 className="job__title">Full Stack Developer</h5>
            <h5 className="job__company">Gummy Mobile</h5>
            <p classN="job__description">It's critical that we give 110% when proactively incentivizing stand-ups. Change the way you do business - adopt seamless industry leaders. Going forward, our knowledge transfer capability will deliver value to executive searches.</p>
          </div>

          ...

        </div>
      </section>    
    );
  }
}

export default Job;  