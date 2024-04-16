export declare function login(body: any): Promise<{
    success: boolean;
    accessToken: string;
    refreshToken: string;
}>;
export declare function refresh(userId: number): Promise<{
    success: boolean;
    accessToken: string;
}>;
//# sourceMappingURL=user.service.d.ts.map