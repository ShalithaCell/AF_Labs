// require “koa” dependency
const Koa = require('koa');
// Import router file to your server.js file
const {HomeRoutes} = require('./routes/home.router');
const bodyParser = require('koa-bodyparser');
const PostRoutes = require('./routes/post.routes');

const app = new Koa();
// You need your server to understand JSON type that can be achieved by using body parser.
app.use(bodyParser());

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods())
app.use(PostRoutes.routes()).use(PostRoutes.allowedMethods());

app.use(ctx => {
    ctx.body = 'Hello World';
});
app.listen(3000);

console.log('Application is running on port 3000');

