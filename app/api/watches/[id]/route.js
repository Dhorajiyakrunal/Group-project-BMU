import { NextResponse } from 'next/server.js';
import 'dotenv/config'


export async function GET(req, res) {

    // console.log(` id :`, req);
    console.log(` id :`, req.params);
    console.log(` id :`, req.query);

    return new NextResponse('Req Success........')
} 