export function getAllKeyword(that) {
    return that.$axios({
        method: 'get',
        url: '/getAllKeyword',
    })
}

export function getKeywordByDate(that, datetime) {
    return that.$axios({
        method: 'get',
        url: '/getKeywordByDate',
        param: {
            datetime: datetime
        }
    })
}
