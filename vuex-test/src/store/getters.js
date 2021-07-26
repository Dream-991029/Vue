export default {
  // 如果需要对数据进行处理,则只需要在getters中进行处理即可
  more20Stu (state) {
    return state.students.filter(s => s.age > 20)
  },
  // 如果想用想用之前处理好的数据则可以通过getters属性获取
  more20StuLength (state, getters) {
    return getters.more20Stu.length
  },
  // 如果想要外面传递过来参数,则可以返回一个方法
  moreAgeStu (state) {
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}
