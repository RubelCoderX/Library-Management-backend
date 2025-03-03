import express from "express";
import { memberController } from "./member.controller";

const router = express.Router();

router.post("/create-member", memberController.createMemberFromDB);
router.get("/get-all-members", memberController.getAllMembersFromDB);
router.get("/:memberId", memberController.getMemberByIdFromDB);
router.put("/:memberId", memberController.getUpdateMemberFromDB);

export const memberRoutes = router;
