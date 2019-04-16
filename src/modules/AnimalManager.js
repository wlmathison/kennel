import APIManager from "./APIManager"


export default Object.create(APIManager, {
    get: {
        value: function (id) {
            return APIManager.get("animals", id)
        }
    },
    getAll: {
        value: function () {
            return APIManager.getAll("animals")
        }
    },
    removeAndList: {
        value: function (id) {
            return APIManager.removeAndList("animals", id)
        }
    }
})