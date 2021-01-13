import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })

      var skills = this.props.data.skills.map(function (skills) {
        var projectImage = 'images/tech/' + skills.image;
        return <div key={skills.name} className="columns feature-item">
          <img className='skill' alt={skills.name} src={projectImage} />
          <h5>{skills.name}</h5>
          {/*<p>{skills.description}</p>*/}
        </div>
      })
    }

    return (
      <section id="portfolio">
        <div className="row">

          <div className="twelve columns collapsed">

            <h1>My Favorite Tech</h1>

            <div id="portfolio-wrapper" className="bgrid-sixths s-bgrid-sixths cf">
              {skills}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
