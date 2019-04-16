const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/animals`).then(e => e.json())
    },
    removeAndList(id) {
        return fetch(`${remoteURL}/animals/${id}`, {
            method: "DELETE"
        }).then(e => e.json())
        .then(this.getAll)
    }
}