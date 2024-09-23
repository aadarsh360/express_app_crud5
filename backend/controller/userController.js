const db = require("../config/db");

// CRUD operations

// Read all users

exports.getAllUser = (req, res) =>{

    const query = "Select * from user_table4";

    db.execute(query, (err, result)=>{
        if(err) return res.status(500).json({error:err});
        res.json(result);
    })
}

// read particular user
exports.getUser = (req, res)=>{

    const {id} = req.params;
    const query = 'Select * from user_table4 where id=?';
    db.execute(query,[id],(err, result)=>{
        if(err) return res.status(500).json({error:err});
        if(result.length === 0){
            return res.json({message:'user not avalible'});
        }
        res.json(result);
    })
}

// Create new user

exports.createUser = (req, res)=>{

    const {name, mobile, email, gender, age, district, state} = req.body;

    const checkMobile = 'Select * from user_table4 where mobile = ?';

    db.execute(checkMobile, [mobile], (err, result)=>{
        if(err) return res.status(500).json({error:err});
        if(result.length > 0){
            return res.status(400).json({message:'Mobile number already exits!!'});
        }
        
        const query = 'Insert into user_table4(name, mobile, email, gender, age, district, state) values(?,?,?,?,?,?,?)';
        db.execute(query, [name, mobile, email, gender, age, district, state], (err, result)=>{

            if(err) return res.status(500).json({error:err});
            res.json({message:'User create successfully !!!'});
        })
    })

}

// Update user

exports.updateUser = (req, res)=>{

    const {id} = req.params;
    const {name, mobile, email, gender, age, district, state} = req.body;
    const query = 'Update user_table4 set name=?, mobile=?, email=?, gender=?, age=?, district=?, state=? where id = ?';
    db.execute(query, [name, mobile, email, gender, age, district, state, id], (err, result)=>{

        if(err) return res.status(500).json({error:err});
        res.json({message:'User Update successfully !!!'});
    })

}

// delete user

exports.deleteUser = (req, res)=>{

    const {id} = req.params;
    const query = 'Delete from user_table4 where id=?';
    db.execute(query,[id],(err, result)=>{
        if(err) return res.status(500).json({error:err});
        res.json({message:'User delete successfully !!!'});
    })
}

