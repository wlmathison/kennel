const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    resource: {
        value: ""
    },
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/${this.resource}/${id}`).then(results => results.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/${this.resource}`).then(results => results.json())
        }
    },
    delete: {
        value: function (id) {
            return fetch(`${remoteURL}/${this.resource}/${id}`, {
                method: "DELETE"
            }).then(results => results.json())
        }
    },
    removeAndList: {
        value: function (id) {
            return fetch(`${remoteURL}/${this.resource}/${id}`, {
                method: "DELETE"
            }).then(results => results.json())
                .then(() => this.getAll(`${this.resource}`))
        }
    }
})