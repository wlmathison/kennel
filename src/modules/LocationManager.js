import APIManager from "./APIManager"


export default Object.create(APIManager, {
    get: {
        value: function (id) {
            return APIManager.get("locations", id)
        }
    },
    getAll: {
        value: function () {
            return APIManager.getAll("locations")
        }
    },
    removeAndList: {
        value: function (id) {
            return APIManager.removeAndList("locations", id)
        }
    }
})