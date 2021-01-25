import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../store/actions/resource'

import { SectionGroup } from '../components/section/SectionGroup'
import { SectionPanel } from '../components/section/SectionPanel'

import { Swimlane } from '../components/swimlane/Swimlane'

import './QuestionTwo.css';

/**
 * Please do not change these dates, the data on the server all fall within the 01/09/2018
 */
const RANGE_START = new Date('2018-09-01T00:00:00Z')
const RANGE_END = new Date('2018-09-01T24:00:00Z')

export const QuestionTwo = (props) => {

  const lans = useSelector(state => state.resource.resource)
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(actions.loadResourceRequested(RANGE_START, RANGE_END))
  }  
  
  return (
    <SectionGroup>
      <SectionPanel>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5" onClick={getData}>Load Swimlane</button>
        <Swimlane lanes={lans} start={RANGE_START} end={RANGE_END} />
      </SectionPanel>
    </SectionGroup>
  )
}