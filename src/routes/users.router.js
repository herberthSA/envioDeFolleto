import express from 'express';
import { pool } from '../database/db.js';

const  usersRouter = express.Router();

usersRouter.get('/',async (req,res)=>{
    const {rows} = await pool.query('SELECT *FROM empleados');
    console.log(rows);
    res.send(rows);

});

usersRouter.get('/:cid',(req,res)=>{

});

export default usersRouter