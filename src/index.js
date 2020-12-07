import {reactive} from './vue3/reactivity/index'

const state = reactive({
  name: '徐忠炜',
  age: 22,
  info: {
    occupation: 'Front End Developer',
    girlFriend: ['小红', '小黄', '大D']
  },
  hobby: ['Porn', 'Basketball', 'Movie']
})

// state.name
// state.name = '爱人'

// state.hobby[0] = 'Gan'
// state.hobby.push('lol')
state.info.girlFriend.push('娜美')

console.log(state)