import { Request } from "express";
export interface RequestAuth extends Request {
    authUser?:any | undefined,
    oauthAccessToken?: any | undefined
}