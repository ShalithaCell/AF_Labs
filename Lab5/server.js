// require “koa” dependency
const Koa = require('koa');

const app = new Koa();
app.use(ctx => {
    ctx.body = 'Hello World';
});
app.listen(3000);

console.log('Application is running on port 3000');

