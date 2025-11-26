import { Request, Response } from 'express';

export default (req : Request, res : Response) => {
      res.json({ 
    message: "🎉 THIZ.js is running - Good for you!",
    routes: {
      home: "/",
      health: "/health"
    },
    docs: "https://github.com/santhosh-2504/thizjs-express"
  });
}