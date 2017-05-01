(function () {
  'use strict';

  angular
    .module('blogs')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    /*
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Blogs',
      state: 'blogs',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'blogs', {
      title: 'List Blogs',
      state: 'blogs.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'blogs', {
      title: 'Create Blog',
      state: 'blogs.create',
      roles: ['user']
    });
    */
    menuService.addMenuItem('topbar', {
      title: 'Latest Blogs',
      state: 'blogs.list',
      roles: ['*']
    });
    menuService.addMenuItem('topbar', {
      title: 'Create Blog',
      state: 'blogs.create',
      roles: ['user']
    });
  }
}());
