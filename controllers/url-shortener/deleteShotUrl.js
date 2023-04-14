const { UrlModel } = require("../../models/urlShort");

const deleteShortUrl = async (req, res) => {
    try {
        await UrlModel.findByIdAndDelete(req.params.id);
        res.json({
            statusCode:200,
            message:"Short url deleted successfully"
        });
        
    } catch (error) {
        res.json({
            error,
            message:"Short url deleted failed",
            statusCode:500,

        });
    }
};

module.exports = { deleteShortUrl };