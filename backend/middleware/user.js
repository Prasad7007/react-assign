const z = require("zod");

const UserSchema = z.object({
    name: z.string(),
    description: z.string().min(8),
})

async function userMiddelware(req, res, next) {
    const name = req.body.name;
    const description = req.body.description;
    
    if(!UserSchema.safeParse({name: name}).success || !UserSchema.safeParse({description: description}).success) {
        res.status(400).json({
            msg: "Wrong inputs!"
        })
        return;
    }
    else {
        next();
    }
}

module.exports = {
    userMiddelware
}