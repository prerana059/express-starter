/// <reference types="cookie-parser" />
import { Request, Response, NextFunction } from 'express';
export declare function authenticateToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function authenticateRefreshToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function isAdmin(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authentication.middleware.d.ts.map