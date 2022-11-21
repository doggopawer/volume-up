import express from "express";
import connection from "../database.js";

const workout = express.Router();

workout.get('/list/:routineId' , async(req, res) => {
    try {
        const { routineId } = req.params;
        const [result] = await connection.execute('SELECT * FROM workout WHERE routine_id = ?' ,[routineId]);
        console.log(result);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});
workout.get('/item/:workoutId' , async(req, res) => {
    try {
        const { workoutId } = req.params;
        const [result] = await connection.execute('SELECT * FROM workout WHERE id = ?;' ,[workoutId]);
        console.log(result);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});

workout.post('/create' , async(req, res) => {
    try {
        const { name, weight, rep, set, routineId } = req.body;
        const [result] = await connection.execute('INSERT INTO `workout` (name, weight, rep, `set`, routine_id) VALUES (?, ?, ?, ?, ?);' ,[name, weight,rep,set, routineId]);
        console.log(result);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});


workout.put('/update' , async(req, res) => {
    try {
        const { name, weight, rep, set, id } = req.body;
        const [result] = await connection.execute('UPDATE workout SET name= ?,weight = ?, rep= ?, `set`= ? WHERE id=?;' ,[name, weight,rep,set,id]);
        console.log(result);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});

workout.delete('/delete/:workoutId' , async(req, res) => {
    try {
        const { workoutId } = req.params;
        const [result] = await connection.execute('DELETE FROM workout WHERE id = ?' ,[workoutId]);
        console.log("딜리트" ,result);
        return res.status(201).json({result});
    } catch (e) {
        console.log(e);
        return res.status(401).json("알수 없는 오류");
    }
});

export default workout;