import React, { Component } from 'react';

class DegreeHistory extends Component {
  render() {
    return (
      <section>
        <h4>Education</h4>

        <div className="degree-list">

          
          <div className="degree">
            <h5 className="degree__institute">Full Stack Academy</h5>
            <p className="degree__field">Ruby on Rails, Full Stack Program</p>
            <p className="degree__dates">2015</p>
          </div>
          ...
        </div>

      </section>
    );
  }
}

export default DegreeHistory;