import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
import User from '../models/user.model.js';
export const verifyToken = (req, res, next) => {
  console.log(req.body)
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }

    const userFromDB = await User.findById(user.id)

    if(user.isAdmin !== userFromDB.isAdmin){
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;

    next();
  });
};
