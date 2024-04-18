import React from 'react';
import '../timeline.css';

function Work(props) {
    const {resumeData}= props;
    return <section className="timeline-container" id="work">
        <div className="timeline">
          <br />
          <h3 style={{ color: 'white', fontWeight: 'bold' }}>
            {' '}
            Work Experience
          </h3>
          <ul>
            {resumeData.work.map((exp, i) => <li key={i.toString()}>
                <span>{exp.duration}</span>
                <div className="content">
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                    <h3>
                      {exp.companyName} - {exp.position}
                    </h3>
                  </a>
                  <p>{exp.desc}</p>
                </div>
              </li>)}
          </ul>
        </div>
      </section>;
  }
export default Work;