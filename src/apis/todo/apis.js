import { request } from '@/request'

const urls = {
  todoUrl: '/todos',
}

const apis = {
  getToodList: ({ params }) =>
    request({
      url: urls.todoUrl,
      params,
      method: 'GET',
    }),
}

export default apis
