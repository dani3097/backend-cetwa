const { Pool } = require ('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:'',
    database:'cetwaapi',
    port: '5432'
});



const getChildren = async (req , res)=>{
   const response = await pool.query('SELECT *FROM children ORDER BY id ASC');
   res.status(200).json(response.rows);
};

const getChildrenById = async (req , res)=>{
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT *FROM children WHERE id=$1',[id]);
    res.json(response.rows);
 };

const createChildren = async (req , res)=>{
    const {name, legalSituation}=(req.body);
    const response = await pool.query('INSERT INTO children (name, legalSituation) VALUES ($1,$2)',[name, legalSituation]);
    res.json({
        message: 'Children added successfully',
        body:{
            child:{name,legalSituation}
        }
    })
 };
 
 const updateChildren = async (req , res)=>{
    const id = parseInt(req.params.id);
    const {name, legalSituation}=(req.body);
    const response = await pool.query('UPDATE children SET name=$1, legalSituation=$2 WHERE id =$3',[name, legalSituation,id]);
    res.json('Child updated successfully')
 };

 const deleteChildren = async (req , res)=>{
    const id = parseInt(req.params.id);
   
    await pool.query('DELETE FROM children where id=$1',[id]);
    res.json('Child ${id} deleted successfully')
 };
module.exports ={
    getChildren, 
    getChildrenById, 
    createChildren, 
    updateChildren, 
    deleteChildren
}