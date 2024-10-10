const marketMain = async(req, res)=>{
    res.render('market-place/main', {req})
}

const trade = (req, res)=>{
    res.render('market-place/trade', {req})
}
const mint = (req, res)=>{
    res.render('market-place/mint', {req})
}
module.exports = { marketMain, trade, mint }