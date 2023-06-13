import { Request, Response, NextFunction } from 'express';

import User from '../models/UserModel';

export function DisplayHome(req:Request, res:Response, next:NextFunction):void
{
  let user = new User();
  user.username = 'admin';
  console.log(`username: ${user.username}`);
  res.render('index', {title: 'Home', page: 'home'});
}
  