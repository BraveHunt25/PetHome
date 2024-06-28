export const isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect("/Login");
  return next();
};

export const isNotLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return res.redirect("/");
  return next();
}
