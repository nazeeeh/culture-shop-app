const middleware = {}

middleware['adminLazyAuth'] = require('..\\middleware\\adminLazyAuth.js')
middleware['adminLazyAuth'] = middleware['adminLazyAuth'].default || middleware['adminLazyAuth']

export default middleware
