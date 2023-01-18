const indexGet = (req, res, next) => {
    return res.status(200).json('OK, teachers routes working');
};

const createPost = (req, res, next) => {
    return res.status(200).json('ok POST de create funcionando');
};

module.exports = {
    indexGet,
    createPost
}

