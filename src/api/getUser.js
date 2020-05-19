export function getUserName(that, id) {
    return that.$axios({
        method: 'get',
        url: '/getUserName',
        param: {
            id: id
        }
    })
}

export function getMail(that) {
    return that.$axios({
        method: 'get',
        url: '/getMail',
    })
}

export function getKeyword(that) {
    return that.$axios({
        method: 'get',
        url: '/getKeyword',
    })
}

function getRelationship(that) {
    return that.$axios({
        method: 'get',
        url: '/getRelationship'
    })
}


export function getCategory() {
    return that.$axios({
        method: 'get',
        url: '/getCategory'
    })
}
