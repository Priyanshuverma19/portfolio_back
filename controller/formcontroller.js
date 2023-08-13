
import {Pfuser} from "../model/form.js"

export const contact=async(req, res, next) =>{

 const {name,email,message} = req.body;
 if (!name || !email || !message) {
    res.status(400).json({ error: "Please Enter All Input Data" })
}
const pfuser=await Pfuser.create(req.body);
res.status(201).json({
    success:true,
    pfuser
})

}