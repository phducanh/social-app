export const MEMBER_TYPE = { GROUP_OWNER: "group-owner", ADMIN: "admin", INSPECTOR: "inspector", MEMBER: "member" };
export const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api` || '';

export const GROUP_TYPE = { OWNED_GROUP: 1, JOINED_GROUP: 2, SUGGESTED_GROUP: 3 }