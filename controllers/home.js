module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs')
    },
    getPortfolioCaseStudy: (req, res) => {
        res.render('portfolio-case-study.ejs')
    },
}