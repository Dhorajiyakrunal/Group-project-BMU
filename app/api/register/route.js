import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import 'dotenv/config'
import { registerController } from '../../../server/controller/authController.js'
import { registerInfo } from "../../../server/model/authModal.js";


export async function POST(req, res) {
    const { email, password } = await req.json();

    if (!email.trim() || !password.trim()) {
        return NextResponse.json({ error: 'All field required!' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email address!' })
    }

    if (password.length < 8) {
        return NextResponse.json({ error: 'Password must be at least 8 characters long!' });
    }

    const findUserExist = await registerInfo.findOne({ email });

    if (findUserExist) {
        return NextResponse.json({ error: "Email already exists!" });
    }

    const register = await registerController({ email, password })
    return NextResponse.json(register)
}
