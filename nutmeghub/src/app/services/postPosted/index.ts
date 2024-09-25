import {type Posted, PrismaClient, type PrismaPromise} from "@prisma/client";


const prisma = new PrismaClient();

export const posted = (formData:FormData) => {
    const res: PrismaPromise<Posted>[] = [];
    formData.forEach( () => {
        const url = "http://localhost:3000/api/posted";
        // リクエストパラメータ
        const params = {
            method: "POST",
            // JSON形式のデータのヘッダー
            headers: {
                "Content-Type": "application/json",
            },
            // リクエストボディ
            body: JSON.stringify({
                "description":formData.get("description") as string,
                "imageUrl":formData.get("imageUrl") as string,
                "userId": formData.get("userId") as string,
                "position": formData.get("position") as string
            }),
        };

        // APIへのリクエスト
        fetch(url, params);

    });
};