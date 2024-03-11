import { NextResponse } from "next/server";
import 'dotenv/config'
import { watchController } from '../../../server/controller/authController.js'
import { useSearchParams } from 'next/navigation'


export async function POST(req, res) {
    const data = await req.json();

    const postData = await watchController(data);
    return NextResponse.json(postData)
}
