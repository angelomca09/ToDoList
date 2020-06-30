import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8080/todo"
})

export default {
    getList() {
        return api.get()
    },
    getItem(id) {
        return api.get(id)
    },
    postItem(item) {
        return api.post("", item)
    },
    putItem(item) {
        let { _id } = item
        let data = { $set: { description: item.description, time: item.time } }
        return api.put(_id, data)
    },
    deleteItem(id){
        return api.delete(id)
    }
}