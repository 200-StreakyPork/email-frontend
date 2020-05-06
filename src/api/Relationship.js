export function getAllRelationship(that) {
    return that.$axios({
        method: 'get',
        url: '/getAllRelationship',
    })
}

export function getPersonalRelationship(that, email) {
    return that.$axios({
        method: 'get',
        url: '/getPersonalRelationship',
        param: {
            email: email
        }
    })
}
