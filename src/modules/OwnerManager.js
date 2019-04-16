import APIManager from "./APIManager"


export default Object.create(APIManager, {
    get: {
        value: function (id) {
            return APIManager.get("owners", id)
        }
    },
    getAll: {
        value: function () {
            return APIManager.getAll("owners")
        }
    },
    removeAndList: {
        value: function (id) {
            return APIManager.removeAndList("owners", id)
        }
    }
})