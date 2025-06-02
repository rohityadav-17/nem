exports.isAuthenticated = (rq, rs, next) => {
  if (rq.session && rq.session.adminID) {
    return next();
  }
  rs.redirect('/login');
};
