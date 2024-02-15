import { http, graphql, HttpResponse } from 'msw'
import { data } from './data'

export const handlers = [
  http.get('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  http.post('https://api.example.com/upload', async(req, res, ctx) => {
    console.log('check');
    const uploadedFile = await JSON.parse(req.body);
    
    // const fileBuffer = await req.body.arrayBuffer();
    data.push(uploadedFile);
    return res(
      ctx.status(200)
    )
  }),
  http.get('https://api.example.com/itemlist', () => {
    return HttpResponse.json({
      data: data
    })
})
]
