import { Request, Response, NextFunction } from 'express';

import User from '../Models/user';

/**
 * This function will display the home page
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayHome(req:Request, res:Response, next:NextFunction):void
{
  /* No need to create a User, but demonstrating how to use the Model */
  let user = new User();
  user.username = 'admin';
  console.log(`username: ${user.username}`);

  /* Now Render the ejs page */
  res.render('index', {title: 'Home', page: 'home'});
}
  