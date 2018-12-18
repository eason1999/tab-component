import tinyFetch from '../utils/fetch'

/**
 * 获取hello数据
 */
export const getHello = params => tinyFetch('/mockjsdata/1/myaccount/uc_account_list', params, { method: 'GET' })

/**
 * 获取hello1数据
 */
export const getHello1 = params => tinyFetch('/mockjsdata/1/myaccount/uc_account_list', params, { method: 'GET' })
