import express from "express";
import connection from "../database.js";
import workout from "./workout.js";

const routine = express.Router();

routine.get('/list/:email' , async(req, res) => {
    try {
        const { email } = req.params;
        const [result] = await connection.execute('SELECT * FROM routine WHERE user_id = (SELECT id FROM user WHERE email=?) LIMIT 5;' ,[email]);
        console.log(result);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});
routine.get('/item/:routineId' , async(req, res) => {
    try {
        const { routineId } = req.params;
        const [result] = await connection.execute('SELECT * FROM routine WHERE id = ?;' ,[routineId]);
        console.log(result);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});
routine.post('/create' , async(req, res) => {
    try {
        const { name, email } = req.body;
        const [result] = await connection.execute('INSERT INTO `routine`(`name`,`user_id`) VALUES (?, (SELECT id FROM user WHERE email=?))' ,[name, email]);
        console.log(result);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});
routine.put('/update' , async(req, res) => {
    try {
        const { name, id } = req.body;
        const [result] = await connection.execute('UPDATE routine SET name= ? WHERE id=?;' ,[name ,id]);
        console.log(result);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});
routine.delete('/delete/:routineId' , async(req, res) => {
    try {
        const { routineId } = req.params;
        const [result] = await connection.execute('DELETE FROM routine WHERE id = ?' ,[routineId]);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});



export default routine;