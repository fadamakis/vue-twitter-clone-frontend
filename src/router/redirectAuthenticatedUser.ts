export default function redirectAuthenticatedUser(_, __, next) {
  const token = localStorage.getItem("token");
  if (token) {
    next("/");
  } else {
    next();
  }
}
