module.exports = async (req , res) =>{
    try{
        const{ job_no , admin_note} = req.body
        console.log(job_no)
        console.log(admin_note)
        conn.query('UPDATE services_data SET detail_admin = ? WHERE job_no =?',[String(admin_note),job_no])
    


    }
    catch (error){
        res.status(500).json({
            message: 'Server Error'
        })
        console.log(error)

    }
}