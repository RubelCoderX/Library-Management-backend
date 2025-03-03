import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, Next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).send({
    success: false,
    message: "Api Not Found",
    error: {
      path: req.originalUrl,
      message: "Your reqested path is not found!!",
    },
  });
};
export default notFound;
