const express = require("express");
const { User } = require("../database-schema/db");
const { userMiddleware } = require("../middleware/user");
const { Router } = require("express");
const router = Router();

router.use(express.json());

router.get("/getCard/:userId",async function(req, res) {
    const name = req.body.name;
    const id = req.params.userId;

    const user = await User.find({
        name: name,
    },{
        _id: id
    })

    if(!card) {
        res.status(400).json({
            msg: "user not found!"
        })
    }
    else {
        res.status(200).json({
            card: user
        })
    }
    
})

router.post("/postCard", userMiddleware,async function(req, res) {
    const name = req.body.name;
    const description = req.body.description;
    const links = req.body;
    
    const create = await User.createOne({
        name: name,
        description: description,
        links: links
    })
    if(!create) {
        res.status(400).json({
            msg:"error"
        })
    }
    else {
        res.status(200).json({
            msg:"created succesfully!"
        })
    }
    


})

router.listen(3000);