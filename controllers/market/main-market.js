const marketMain = async(req, res)=>{
    res.render('market-place/main', {req})
}

module.exports = { marketMain }