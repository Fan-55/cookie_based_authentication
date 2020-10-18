module.exports = {
  if_exist: function (error, options) {
    if (error) {
      return options.fn(this)
    }
  }
}