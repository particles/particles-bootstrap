
module.exports = {
  __module: {
    provides: ["assetManager/register_assets_dir"]
  },

  register_assets_dir: function() {
    return __dirname + "/../../assets";
  }
};