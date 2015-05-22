Follow = {};

Unionize.hooks.follow = function(userId, docs, key){
  console.time('hooks.follow');
  log(arguments)
  console.timeEnd('hooks.follow');
  Session.set("Hookfollow","end");
  // log(userId, docs, key);
}

Unionize.afterhooks.follow = function(userId, docs, key){
  console.time('afterhooks.follow');
  log(arguments)
  console.timeEnd('afterhooks.follow');
  // log(userId, docs, key);
}