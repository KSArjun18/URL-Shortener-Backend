const { UrlModel } = require("../../models/urlShort");

const shortUrl = async (req, res) => {
    try {
        let data = await UrlModel.findOne({ shortUrl: req.params.shortUrl })
        if (data) {
            await UrlModel.findByIdAndUpdate({ _id: data._id }, { $inc: { clickCount: 1 } })
            res.redirect(data.longUrl);
        } else {
            res.json({
                message: "Url redirect failed",
                statusCode: 200,
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

module.exports = { shortUrl };