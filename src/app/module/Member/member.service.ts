import { Member } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createMemberIntoDB = async (member: Member) => {
  const isExist = await prisma.member.findUnique({
    where: {
      email: member.email,
    },
  });
  if (isExist) {
    throw new Error("Member already exist with this email");
  }
  const result = await prisma.member.create({
    data: member,
  });
  return result;
};

const getAllMembersIntoDB = async () => {
  const result = await prisma.member.findMany();
  return result;
};
const getMemberByIdIntoDB = async (memberId: string) => {
  const isExistMember = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  if (!isExistMember) {
    throw new Error("Member not found");
  }
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  return result;
};

const getUpdateMemberIntoDB = async (
  memberId: string,
  data: Partial<Member>
) => {
  const isExistMember = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  if (!isExistMember) {
    throw new Error("Member not found");
  }
  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data,
  });
  return result;
};

export const memberService = {
  createMemberIntoDB,
  getAllMembersIntoDB,
  getMemberByIdIntoDB,
  getUpdateMemberIntoDB,
};
