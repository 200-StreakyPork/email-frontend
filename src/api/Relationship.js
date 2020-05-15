export function getAllRelationship(that) {
    return that.$axios({
        method: 'get',
        url: '/getAllRelationship',
    })
}

export function getPersonalRelationship(that, email) {
    console.log(email);
    return that.$axios({
        method: 'get',
        url: '/getPersonalRelationship',
        params: {
            email: email
        }
    })
}
