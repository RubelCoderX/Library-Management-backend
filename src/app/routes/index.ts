import express from "express";
import { memberRoutes } from "../module/Member/member.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/member",
    route: memberRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
