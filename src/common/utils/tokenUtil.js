const { default: api } = require("../../config/api")

var config = {
    headers: {'Content-Type': 'text/plain'}
}

const verifyToken = (token) => {
    return api.post("/instagram/loken/verify", token, config)
            .then(response => {
                return response.data.valid
            }).catch(() => {
                return false
            })

}

module.exports = {
    verifyToken
}