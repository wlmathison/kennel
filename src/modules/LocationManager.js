const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/locations/${id}`).then(results => results.json())
    },
    getAll() {
        return fetch(`${remoteURL}/locations`).then(results => results.json())
    },
    removeAndList(id) {
        return fetch(`${remoteURL}/locataions/${id}`, {
            method: "DELETE"
        }).then(results => results.json())
        .then(this.getAll)
    }
}