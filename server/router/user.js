
import express from "express";
import {createToken} from "../auth.js";
import connection from "../database.js";

const user = express.Router();

user.post('/create' , async(req, res) => {
    try {
        const {email, password} = req.body;
        const [result] = await connection.execute('INSERT INTO `user`(`email`,`password`) VALUES (? ,?)' ,[email, password]);

        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});
user.post('/auth' , async(req, res) => {
    try {
        const {email, password} = req.body;
        const [result] = await connection.execute('SELECT password FROM `user` WHERE `email` = ?' , [email]);
        const dbPassword = result[0].password;
        console.log(password, dbPassword);
        if(password === dbPassword) {
            return res.json({authToken: createToken(email), email});
        }
        return res.status(401).json("비밀번호가 일치하지 않습니다.");
    } catch (e) {
        console.log(e);
        return res.status(401).json("아이디가 존재하지 않습니다.");
    }
});

export default user;