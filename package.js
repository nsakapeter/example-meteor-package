Package.describe({
  name: 'example:meteor-package',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
	  'accounts-base',
    'mongo',
	  'session',
	  'tracker',
    'ecmascript',
    'templating',
    'coffeescript',
    'underscore',
    'rocketchat:lib',
	  'kadira:flow-router',
	  'reactive-var',
	  'raix:push',
	  'raix:ui-dropped-event',
	  'aaronroberson:angular-strap',
    'mrt:nprogress'
  ]);

  api.use('kadira:flow-router', 'client');

  //Router
  // api.addFiles('client/routes/router.js', 'client');

  //Client Side Collection
  // api.addFiles('client/collections/collection.js', 'client');

  //Models
  // api.addFiles('server/models/xxxx.js', 'server');

  //Publications
  // api.addFiles('server/publications/xxxx.js', 'server');

  //Templates HTML
  // api.addFiles('client/templates/example_template.html', 'client');

  //Templates JS
  // api.addFiles('client/templates/example_template.js', 'client');



  //Server-Side methods
  // api.addFiles('server/methods/exampleMethod.js', 'server');


});
