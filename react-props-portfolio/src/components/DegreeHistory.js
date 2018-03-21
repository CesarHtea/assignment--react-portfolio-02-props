import React, { Component } from 'react';

class DegreeHistory extends Component {
  render() {
    const listaDegree = this.props.listaDegree
    // console.log(listaDegree)
    return (
      <section>
        <h4>Education</h4>
        <div className="degree-list">
          

          { listaDegree.map(function(degree) {
              // console.log(degree.institute)
              // console.log(degree.fieldOfStudy)
              // console.log(degree.dates)
              return (
                    <div className="degree">
                      <h5 className="degree__institute">{degree.institute}</h5>
                      <p className="degree__field">{degree.fieldOfStudy}</p>
                      <p className="degree__dates">{degree.dates}</p>
                    </div>
              );
          })}
          
          


        </div>

      </section>
    );
  }
}

export default DegreeHistory;