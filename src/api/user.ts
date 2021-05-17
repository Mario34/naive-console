import request from '/@/request'

export const login = (data: unknown): Promise<unknown> => {
  return request.get('/mock-api/login.json', { params: data })
}

export const getUserInfo = (data: unknown): Promise<unknown> => {
  return request.get('/mock-api/user.json', { params: data })
}