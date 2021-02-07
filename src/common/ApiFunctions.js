import API from "./Api"

const ENDPOINT = "developers/"

async function getDevelopers() {
    const res = await API.get(ENDPOINT);
    return res.data;
}

async function deleteDeveloperFromID(idDeveloper) {
    const res = await API.delete(ENDPOINT + idDeveloper)
    return res.status.valueOf();
}

async function create(developer) {

    if (developer.nome === null || developer.nome === "") return 0

    const res = await API.post(ENDPOINT, developer)
    return res.status.valueOf();
}
async function update(developer) {

    if (developer.nome === null || developer.nome === "") return 0

    const res = await API.put(ENDPOINT + developer._id, developer)
    return res.status.valueOf();
}
export {
    getDevelopers,
    deleteDeveloperFromID,
    create,
    update
}