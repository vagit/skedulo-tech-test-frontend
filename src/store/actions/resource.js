import * as actionTypes from './actionTypes'
import moment from 'moment'

function group(list, eventType = 'jobs', obj = {}, times = {start: '', end: ''}) {
  const rangeStart = moment(times.start)
  const rangeEnd = moment(times.end)
  return list.reduce(function (rv, x) {
    const eventStart = moment(x.event.start)
    const eventEnd = moment(x.event.end)
    const temp = {
      ...x.event,
      start: new Date(x.event.start),
      end: new Date(x.event.end),
      description: x.event.name
    }
    if (eventStart >= rangeStart && eventEnd <= rangeEnd) {
      // debugger
      rv[x.resource.id] || (rv[x.resource.id] = x.resource);
      rv[x.resource.id] = {
        ...rv[x.resource.id],
        start: times.start,
        end: times.end
      };
      (rv[x.resource.id]['cards'] = rv[x.resource.id][eventType] || rv[x.resource.id]['cards'] || []).push(temp);
    }
    return rv;  
  }, obj);
}

export const loadResources = (data, start, end) => {
  
  let resourceFiltered = []
  group(data.jobAllocations, 'jobs', resourceFiltered, { start, end })
  group(data.activityAllocations, 'activities', resourceFiltered, { start, end })
  return ({
    type: actionTypes.LOAD_RESOURCE_SUSSCESS,
    resource: resourceFiltered
  })
}

// export const loadResourcesSuccess = (resource) => ({
//   type: actionTypes.LOAD_RESOURCE_SUSSCESS,
//   resource
// })

export const loadResourceRequested = (start, end) => {
  console.log('dispatch')
  return ({
    type: actionTypes.LOAD_RESOURCE_REQUESTED,
    start,
    end
  })
}
