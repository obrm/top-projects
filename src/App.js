import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import projects from './data'

function App() {
  const [value, setValue] = useState(0)

  const { repo, site, dates, duties, title } = projects[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>my top projects</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && `active-btn`}`}
            >
              {project.dates}
            </button>
          ))}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <p className='job-date'>{dates}</p>
          {duties.map((duty) => (
            <div key={duty} className='job-desc'>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          ))}
          <div className='job-desc'>
            <FaAngleDoubleRight className='job-icon' />
            <p>
              GitHub repository:{' '}
              <a href={repo} target='_blank' rel='noopener noreferrer'>
                {repo}
              </a>
            </p>
          </div>
          <div className='job-desc'>
            <FaAngleDoubleRight className='job-icon' />
            <p>
              Site:{' '}
              <a href={site} target='_blank' rel='noopener noreferrer'>
                {site}
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
export default App
