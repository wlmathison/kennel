const remoteURL = "http://localhost:5002";

export default {
    get(id) {
        return fetch(`${remoteURL}/owners/${id}`).then(results => results.json())
    },
    getAll() {
        return fetch(`${remoteURL}/owners`).then(results => results.json())
    },
    removeAndList(id) {
        return fetch(`${remoteURL}/owners/${id}`, {
            method: "DELETE"
        }).then(results => results.json)
        .then(this.getAll)
    }
}