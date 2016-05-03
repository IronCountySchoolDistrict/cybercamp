Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'QuestionsController',
  action: 'list',
  where: 'client'
});

Router.route('/login', {
  name: 'login',
  controller: 'LoginController',
  where: 'client'
});

Router.route('/challenge/:_id', {
  name: 'challenge',
  controller: 'QuestionsController',
  where: 'client'
});

Router.route('/test/correct', {
  name: 'correct',
  controller: 'QuestionsController',
  where: 'client'
});

Router.route('/test/success/:_id', {
  name: 'success',
  controller: 'QuestionsController',
  where: 'client'
});

Router.route('/test/failure/:_id', {
  name: 'failure',
  controller: 'QuestionsController',
  where: 'client'
});

Router.route('/admin', {
  name: 'admin',
  controller: 'AdminController',
  action: 'list',
  where: 'client'
});

Router.route('/admin/register', {
  name: 'register',
  controller: 'RegisterController',
  where: 'client'
});

Router.route('/admin/groups', {
  name: 'groups',
  controller: 'AdminController',
  where: 'client'
});

Router.route('/admin/create', {
  name: 'createQuestion',
  controller: 'QuestionsController',
  action: 'create',
  where: 'client'
});

Router.route('/admin/edit/:_id', {
  name:'editQuestion',
  controller: 'QuestionsController',
  action: 'edit',
  where: 'client'
});
