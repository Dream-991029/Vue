import axios from 'axios'

// 封装axios
// 传入三个参数: 配置, 成功后的回调, 失败后的回调
export function request (config, success, failure) {
  // 创建axios实例
  const instance = axios.create({
    // 默认拼接的url
    baseURL: 'http:192.168.2.136:8080',
    // 超时时间
    timeout: 5000
  })

  // 返回一个axios实例
  return instance(config)
    .then(res => {
      success(res)
    })
    .catch(err => {
      failure(err)
    })
}

// 传入一个参数:config
export function request1 (config) {
  // 创建axios实例
  const instance = axios.create({
    // 默认拼接的url
    baseURL: 'http:192.168.2.136:8080',
    // 超时时间
    timeout: 5000
  })
  // 返回axios实例
  return instance(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.failure(err)
    })
}

// 使用Promise
export function request2 (config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      // 默认拼接的url
      baseURL: 'http:192.168.2.136:8080',
      // 超时时间
      timeout: 5000
    })
    instance(config.baseConfig)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// 直接return这个实例,因为这个实例本身就是一个Promise
export function request3 (config) {
  const instance = axios.create({
    // 默认拼接的url
    baseURL: 'http:192.168.2.136:8080',
    // 超时时间
    timeout: 5000
  })
  return instance(config)
}
