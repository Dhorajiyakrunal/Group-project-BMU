import { NextResponse } from 'next/server.js';
import { WatchModal } from '../../../server/model/watchModel.js'
import 'dotenv/config'


export async function GET(req, res) {
    const getAllWatch = await WatchModal.find();
    return NextResponse.json(getAllWatch)
}
