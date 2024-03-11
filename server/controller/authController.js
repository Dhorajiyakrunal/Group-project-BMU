import { registerInfo } from '../model/authModal.js';
import { WatchModal } from '../model/watchModel.js';
import connectDB from '../../db/connectDB.js';
connectDB();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const registerController = async (req) => {
    connectDB();

    const { email, password } = req;
    const passToHash = bcrypt.hashSync(password, 12);

    const doc = await registerInfo.create({
        email,
        password: passToHash
    });

    const userInfo = await registerInfo.findOne({ email })
    const token = jwt.sign({ userId: userInfo._id }, 'y5deKa9mH60cuirULa09a344s8xQgA', { expiresIn: '30d' });

    return { message: "Register Successfully.", doc, token };
}


export const loginController = async (oldPass, userInfo) => {

    const matchPassword = await bcrypt.compare(oldPass, userInfo.password);

    if (!matchPassword) {
        return { error: "Incorrect password!" };
    }
    else {
        const token = jwt.sign({ userId: userInfo._id }, 'y5deKa9mH60cuirULa09a344s8xQgA', { expiresIn: '30d' });
        return { message: "Login Successfully", userInfo, token };
    }
}


export const watchController = async (req) => {

    const doc = await WatchModal.create(req);

    return { doc, message: "Watch added Successfully." };

}