export default {
  aupdateInfo (contxt, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        contxt.commit('updateInfo')
        resolve(payload.message)
      }, 2000)
    })
  }
}
