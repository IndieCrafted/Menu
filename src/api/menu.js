import api from './config'

// 获取酒单
export const getScreenInfo = data => api.get('/screen/list', data)
