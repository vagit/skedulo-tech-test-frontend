import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import Axios from 'axios';

const graphClient = new ApolloClient({
  uri: 'http://localhost:3500/graphql'
});

const axiosClient = Axios.create({
  baseURL: 'http://localhost:3400'
})

export const DataService = {
  //
  //  SAMPLE GraphQL Call
  //
  getJobsWithSearchTerm: (searchTerm) => {
    return graphClient.query({
      query: gql`
      query ($searchTerm: String){
        jobs(name: $searchTerm) {
          id,
          name,
          start,
          end,
          contact {
            id
            name
          }
        }
      }
      `,
      variables: {
        searchTerm: searchTerm
      }
    })
      .then(result => result.data)
      .then(data => data.jobs)
  },
  getJobsAndActivity: () => {
    return graphClient.query({
      query: gql`
      query getAllocations {
        jobAllocations {
          id
          resource {
            ...resourceFields
          }
          event: job {
            id
            name
            start
            end
          }
        }
        activityAllocations {
          id
          resource {
            ...resourceFields
          }
          event: activity {
            id
            name
            start
            end
          }
        }
      }

      fragment resourceFields on Resource {
        id
        title: name
      }
      `
    })
  }

  //
  //  SAMPLE Normal call
  //
  // getJobs: () => {
  //   return axiosClient.get('/jobs')
  //     .then(result => result.data.map(x => Object.assign({}, x, { id: x.id + '' })))
  // },
  

}