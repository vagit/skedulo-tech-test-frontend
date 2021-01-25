import React from 'react'
import moment from 'moment'

const JobTile = (props) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg ske-border-blue border-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base pb-4">Assignee: {props.contact.name}</p>
        <p className="text-gray-700 text-base">
          <span className="block">Start Date: {moment(props.start).format('DD.MM.YYYY HH:mm')}</span>
          <span className="block">End Date: {moment(props.end).format('DD.MM.YYYY HH:mm')}</span>
        </p>
      </div>
    </div>
  )
}

export default JobTile
