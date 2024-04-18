import React from 'react';


function CodingPlatform(props)
{
  const {resumeData} = props;
  return <section id="codingPlatform" style={{ backgroundColor: '#ccc' }}>
      <div className="row ">
        <div className="three columns header-col">
          <h1>
            <span>CodingPlatform</span>
          </h1>
        </div>

        <div className="coding-platform-container">
  {resumeData.codingPlatform.map((group) => (
    <div key={group.name} className="coding-platform-item">
      <a
        href={group.url}
        target="_blank"
        rel="noopener noreferrer"
        className="coding-platform-link"
      >
        <img src={group.imgurl} alt="" className="coding-icons" />
        <h4>{group.name}</h4>
      </a>
      
    </div>
  ))}
</div>

      </div>
    </section>;
}

export default CodingPlatform;