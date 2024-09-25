import { NextRequest, NextResponse } from "next/server";
import {type Posted, PrismaClient, type PrismaPromise} from "@prisma/client";
import {resolveSrv} from "node:dns";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    // リクエストボディを展開
    const { description, imageUrl, userId, position } = await req.json();

    const res = await prisma.posted.create({
        data: {
            "description":description as string,
            "imageUrl": imageUrl as string,
            "userId": userId as string,
            "position":position as string
        },
    });

    return NextResponse.json(res);
}