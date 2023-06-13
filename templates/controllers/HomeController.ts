import User from '../models/UserModel';

export class HomeController {
    static index(req: any, res: any) {
      let user = new User();
      res.render('home');
    }
  }
  