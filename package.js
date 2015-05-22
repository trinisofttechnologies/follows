Package.describe({
  name: 'youiest:follow',
  version: '0.0.4',
  summary: ' for reactive network triggers with a simple ui',
  git: 'https://github.com/youiest/youiest-unionize.git',
  documentation: 'README.md'
});


Package.on_use(function (api) {
  api.versionsFrom('1.0.3.1');
  api.use([
    'templating',
    'deps',
    'tracker',
    'session',
    'pedrohenriquerls:reactjs',
    'youiest:recommend',
    ], ['client', 'server']);

  // like Document W will be an extended coll..
  api.export('Follow', ['client','server']);

  api.add_files([
    'lib.js'
  ], ['client','server']);

  api.add_files([
    'templateFollow.html',
    'templateFollow.jsx',
    'client.js'
  ], ['client']);

  api.add_files([
    'server.js'
  ], ['server']);


  // api.add_files([
  //   'lib.coffee','ground:db'
  // ], ['client','server']);

  // api.add_files([
  //   'client.coffee'
  // ], 'client');

  // api.add_files([
  //   'server.coffee', 'publish.coffee'
  // ], 'server');
});

Package.on_test(function (api) {
  // api.versionsFrom('1.0.3.1');
  api.use(
    [

      'templating',
      'deps',
      'tracker',
      'session',
      'pedrohenriquerls:reactjs',
    
      'underscore',
      'ground:db',
      'aldeed:console-me',
      'matb33:collection-hooks',
      'tracker', 
      'tinytest', 
      'test-helpers', 
      'coffeescript', 
      'insecure', 
      'accounts-base', 
      'accounts-password', 
      'underscore', 
      'random', 
      'pedrohenriquerls:reactjs',
      'mongo',
      'youiest:unionize'
    ], 
    [
      'client', 
      'server'
    ]);

  api.export('Follow', ['client','server']);

  api.add_files([
    'lib.js'
  ], ['client','server']);

  api.add_files([
    'templateFollow.html',
    'templateFollow.jsx',
    'client.js'
  ], ['client']);

  api.add_files([
    'server.js'
  ], ['server']);


  api.add_files([
    'test.js'
  ], ['client','server']); 

});
