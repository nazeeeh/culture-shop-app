// const redirects = [{
//     'from': '/settings/general/user-permission',
//     'to': '/settings/general/user-permission/user'
// }]

// export default function (req, res, next){
//     const redirect = redirects.find((r) => r.from === req.url)

//     if (redirect) {
//         res.writeHead(301, {location: redirect.to})
//         res.end()
//     }else {
//         next()
//     }
// }