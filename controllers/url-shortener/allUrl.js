const { UrlModel } = require("../../models/urlShort");

const allUrl = async (req, res) => {
    try {
         let v =  await UrlModel.find()

     const data = v.filter((item)=> item.userId ==  req.params.id)

        res.json({
            message: "Url send successfull",
            statusCode: 200,
            datas:data.reverse()
        });
    } catch (error) {
        res.json({
            error,
            message: "Url send failed",
            statusCode: 500,
        });
    }
};

module.exports = { allUrl };

