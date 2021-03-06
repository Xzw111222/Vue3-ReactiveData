import { isObject, isEqual, hasOwnProperty } from "../shared/utils"
import { reactive } from "./reactive"

const get = createGetter()
const set = createSetter()

function createGetter() {
  return function get(target, key, receiver) {

    const res = Reflect.get(target, key, receiver)
    console.log('响应式获取:' + target[key])

    if(isObject(res)) { // 深层监听
      return reactive(res)
    }
    return res
  }
}
function createSetter() {
  return function set(target, key, value, receiver) {
    // 判断是否新增
    const isKeyExist = hasOwnProperty(target, key)

    // 修改之前的值
    const oldValue = target[key]

    const res = Reflect.set(target, key, value, receiver)

    if (!isKeyExist) {
      console.log('响应式新增:' + value)
    } else if (!isEqual(value, oldValue)) {
      console.log('响应式修改:' + key + '=' + value)
    }

    return res
  }
}

const mutableHandler = {
  get,
  set
}

export {
  mutableHandler
}