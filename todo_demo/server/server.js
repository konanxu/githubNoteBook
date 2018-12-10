const Koa = require('koa')

// const pageRouter = require('./routers/dev-ssr')

const app = new Koa()

const send = require('koa-send')

const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const staticRouter = require('./routers/static')

app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 500
    ctx.body = isDev ? err.message : 'please try again'
  }
})
// app.use(favicon(path.join(__dirname, '/public/favicon.ico')))
app.use(async (ctx, next) => {
  console.log(ctx.path)
  if (ctx.path === '/favicon.ico') {
    await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../') })
  } else if (ctx.path === '/robots.txt') {
    ctx.body = ''
  } else {
    await next()
  }
})

app.use(staticRouter.routes()).use(staticRouter.allowedMethods())
let pageRouter = require(isDev ? './routers/dev-ssr' : './routers/ssr')

// let pageRouter
// if (isDev) {
//   pageRouter = require('./routers/dev-ssr')
// } else {
//   pageRouter = require('./routers/ssr')
// }

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 8010

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
