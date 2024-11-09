import express from "express";
import cors from "cors";
import pkg from "pg";

const port = 3001;
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.get("/",(req,res) => {
    const pool = openDb();

    pool.query('select * from task',(error, result)=> {
        if(error){
            return res.status(500).json({error: error.message})
        }
        return res.status(200).json(result.rows);
    })
})
app.post("/create",(req,res) => {
    const pool = openDb();

    pool.query('insert into task (description) values($1) returning *',
        [req.body.description],
        (error,result) => {
            if(error){
                return res.status(500).json({error: error.message})
            }
            return res.status(200).json({id: result.rows[0].id});
        }
    )
})
app.delete("/delete/:id",(req,res) => {
    const pool = openDb();
    const id = parseInt(req.params.id);
    pool.query('delete from task where id=$1',
        [id],
        (error,result) => {
            if(error){
                return res.status(500).json({error: error.message})
            }
            return res.status(200).json({id: id});
        }
    )
})


const openDb = () => {
    const pool = new Pool ({
        user: 'postgres',
        host: 'localhost',
        database: 'todo',
        password: 'root',
        port: 5432
    })
    return pool;
}


app.listen(port);