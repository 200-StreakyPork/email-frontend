export function getCategory(that) {
    return that.$axios({
        method: 'get',
        url: '/getCategory',
    })
}

export function getTopic(that, category) {
    return that.$axios({
        method: 'get',
        url: '/getTopic',
        params: {
            category: category,
        }
    })
}

export function getDoc(that, category, topic) {
    return that.$axios({
        method: 'get',
        url: '/getDoc',
        params: {
            category: category,
            topic: topic
        }
    })
}
