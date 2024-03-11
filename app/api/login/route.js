import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import 'dotenv/config'
import { registerInfo } from "../../../server/model/authModal";
import connectDB from '../../../db/connectDB.js'
import { loginController } from "../../../server/controller/authController";
connectDB();

export async function POST(req, res) {
    const { email, password } = await req.json();

    if (!email.trim() || !password.trim()) {
        return NextResponse.json({ error: 'All field required!' })
    }

    const findUserExist = await registerInfo.findOne({ email })
    if (!findUserExist) {
        return NextResponse.json({ error: "Incorrect email address!" });
    }

    const response = await loginController(password, findUserExist);

    return NextResponse.json(response);
}

