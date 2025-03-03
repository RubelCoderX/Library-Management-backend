import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { memberService } from "./member.service";

const createMemberFromDB = catchAsync(async (req, res) => {
  const member = req.body;
  const result = await memberService.createMemberIntoDB(member);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Member Created Successfully",
    data: result,
  });
});

const getAllMembersFromDB = catchAsync(async (req, res) => {
  const result = await memberService.getAllMembersIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Members retrieved successfully",
    data: result,
  });
});

const getMemberByIdFromDB = catchAsync(async (req, res) => {
  const memberId = req.params.memberId;
  const result = await memberService.getMemberByIdIntoDB(memberId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Member retrieved successfully",
    data: result,
  });
});

const getUpdateMemberFromDB = catchAsync(async (req, res) => {
  const memberId = req.params.memberId;
  const data = req.body;
  const result = await memberService.getUpdateMemberIntoDB(memberId, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member Updated Successfully",
    data: result,
  });
});

export const memberController = {
  createMemberFromDB,
  getAllMembersFromDB,
  getMemberByIdFromDB,
  getUpdateMemberFromDB,
};
