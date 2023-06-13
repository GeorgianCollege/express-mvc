import User from '../Models/user';

/* Example Controller to Display Home Page */
export function DisplayHome(req, res, next)
{
  /* No need to create a User, but demonstrating how to use the Model */
  let user = new User();
  user.username = 'admin';
  console.log(`username: ${user.username}`);

  /* Now Render the ejs page */
  res.render('index', {title: 'Home', page: 'home'});
}
  