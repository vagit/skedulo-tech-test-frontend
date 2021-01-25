import React from 'react'
import { useSelector } from 'react-redux'

import { SectionGroup } from '../components/section/SectionGroup'
import { SectionPanel } from '../components/section/SectionPanel'

import SearchBox from './components/SearchBox'
import JobList from './components/Job/JobList'
import Loading from './components/UI/Loading'
import Error from './components/UI/Error'

import './QuestionOne.css'

export const QuestionOne = (props) => {
  const jobsList = useSelector(state => state.jobs.jobs)
  const error = useSelector(state => state.jobs.error)
  const errorMsg = useSelector(state => state.jobs.errorMsg)
  const loading = useSelector(state => state.jobs.loading)

  return (
    <SectionGroup>
      <SectionPanel>
        <SearchBox />
        <JobList jobsList={jobsList} />
        { loading && <Loading show={loading} /> }
        { (error || errorMsg) && <Error message={errorMsg} />}
      </SectionPanel>
    </SectionGroup>
  )
}