import { Request, Response, NextFunction, Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', function(_req: Request, res: Response, _next: NextFunction) {
  res.render('index', { title: 'Express' });
});

export default router;
