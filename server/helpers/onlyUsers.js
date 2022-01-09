module.exports.onlyUsers = (req, res, next) => {
    if (["User","Admin"].includes(req.session.user?.role)) {
        next()
    } else {
        res.status(401).send({err:true, msg: "secure content. please log as in a user to access" })
    }
}