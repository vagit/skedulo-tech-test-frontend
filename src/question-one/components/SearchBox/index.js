import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../../../store/actions'

import { DataService } from '../../../service/DataService'

const SearchBox = React.memo(props => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm.length >= 3) {
      dispatch(actions.loadJobs(searchTerm))
    } else if (!searchTerm) {
      dispatch(actions.clearJobList())
    }
  }, [searchTerm])

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(actions.loadJobs(searchTerm))
  }

  const onKeyDownHandler = (event) => {
    if (event.keyCode == 13) {
      dispatch(actions.loadJobs(searchTerm))
    }
  }

  return (
    <div className="mb-5">
      <form onSubmit={submitHandler}>
        <label className="block">
          <span className="text-gray-700 text-center block text-2xl">Look up for Job</span>
          <input className="appearance-none block border form-input mt-1 px-3 py-2 w-full rounded" placeholder="Enter Job" type="text"
            value={searchTerm}
            onKeyDown={(e) => onKeyDownHandler(e)}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
})

export default SearchBox
