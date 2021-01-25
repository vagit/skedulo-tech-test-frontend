import React from 'react'
// import { useSelector } from 'react-redux'

import JobTile from './JobTile'

const JobList = (props) => {
  // const jobsList = useSelector(state => state.jobs.jobs)

  return (
    <ul className="space-y-4">
      { props.jobsList.map(job => (
        <li key={job.id}>
          <JobTile name={job.name} start={job.start} end={job.end} contact={job.contact} />
        </li>
      ))}
    </ul>
  )
}
export default JobList

