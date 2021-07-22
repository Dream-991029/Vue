// common.js
// module.exports = {
//   "flag": true,
//   "name": "小明",
//   "age": 18,
//   "sex": "男",
//   "info": function () {
//     console.log(`姓名: ${this.name}  年龄: ${this.age}  性别: ${this.sex}`);
//   }
// }

// ES6
export default {
    "flag": true,
    "name": "小明",
    "age": 18,
    "sex": "男",
    "info": function () {
        console.log(`姓名: ${this.name}  年龄: ${this.age}  性别: ${this.sex}`);
    }
}