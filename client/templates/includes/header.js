Template.header.helpers({
  activeRouteClass: function(/* route names */) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop();

    var active = _any(args, function(name) {
      return Router.current() && Router.current().route.getName() === name
    });

    return active && 'active';
  }
});
