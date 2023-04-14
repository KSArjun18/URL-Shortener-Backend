const { UrlModel } = require("../../models/urlShort");

const createUrl = async (req, res) => {
    try {

        const { longUrl ,id} = req.body;
        let data = await UrlModel.findOne({ longUrl: longUrl })
        if (!data) {
            await UrlModel.create({
                longUrl,
                shortUrl: generateUrl(),
                userId : id
            })
            res.json({
                message: "Url create successfull",
                statusCode: 201,
            });
        } else {
            res.json({
                message: "Already this url found",
                statusCode: 400,
            });
        }


    } catch (error) {
        res.json({
            error,
            message: "Url create failed",
            statusCode: 500,
        });
    }
};

module.exports = { createUrl };

function generateUrl() {
    var rndResult = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;

    for (var i = 0; i < 5; i++) {
        rndResult += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return rndResult
}