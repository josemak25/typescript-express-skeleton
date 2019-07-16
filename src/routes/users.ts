import { Request, Response, NextFunction, Router } from 'express';
const router = Router();

/* GET users listing. */
router.get('/', function(_req: Request, res: Response, _next: NextFunction) {
  res.send('respond with a resource');
});

export default router;
