Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function() {
  check(postId, String);
  return Comments.find({postId: postId});
});
