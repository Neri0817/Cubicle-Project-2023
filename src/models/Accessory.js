const { Schema } = require("mongoose");

const accessorySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
    maxLength: 50,
  },
});

const Accessory = model("Accessory", accessorySchema);

module.exports = Accessory;
