import google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    providers: [google],
    pages: {},
    callbacks: {},
} satisfies NextAuthConfig;