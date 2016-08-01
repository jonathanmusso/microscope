var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  },
  {
    title: 'Google',
    url: 'http://google.ca'
  },
  {
    title: 'Thinkster',
    url: 'http://thinkster.io'
  },
  {
    title: 'Harley-Davidson',
    url: 'http://harley-davidson.ca'
  }
];
Template.postsList.helpers({
  posts: postsData
});
