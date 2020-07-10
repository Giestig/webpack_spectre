// It is handy to not have those transformations while we developing
module.exports = ({ file, options, env }) => ({
  plugins: [
    env === 'production' ? require('autoprefixer') : false,
    env === 'production' ? require('cssnano') : false,
  ]
})