import { QueryBuilder } from '../src/App.js'


const resource = {
  name: 'test',
  id: 'some-random-id',
  path: 'https://montreal-staging-site.ca/datastore/dump/some-random-id',
  schema: {
    fields: [
      {
        name: 'a',
        type: 'string'
      },
      {
        name: 'b',
        type: 'string'
      },
      {
        name: 'c',
        type: 'string'
      }
    ]
  }
}

const filterBuilderAction = (resource) => {
  alert(JSON.stringify(resource))
}

export default {
  component: QueryBuilder,
  props: {resource, filterBuilderAction}
};
