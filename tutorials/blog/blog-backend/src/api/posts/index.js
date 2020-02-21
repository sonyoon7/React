const Router = require("koa-router");
const posts = new Router();
const postsCtrl = require("./posts.ctrl");

// const printInfo = ctx => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//     query: ctx.query,
//   };
// };

// posts.get("/", printInfo);
// posts.post("/", printInfo);
// posts.get("/:id", printInfo);
// posts.delete("/:id", printInfo);
// posts.put("/:id", printInfo);
// posts.patch("/:id", printInfo);

posts.get("/", postsCtrl.list);
posts.post("/", postsCtrl.write);
posts.get("/:id", postsCtrl.read);
posts.delete("/:id", postsCtrl.remove);
posts.put("/:id", postsCtrl.replace);
posts.patch("/:id", postsCtrl.update);

module.exports = posts;
