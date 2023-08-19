import  Jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
    //get token from header
     const token = req.headers.authorization
     const secret = process.env.JWT_SECRET;
     try {
        if (token){
            const splitToken = token.split(" ")[1];
            const decoded = Jwt.verify(splitToken, secret);
            const {email, id} = decoded
            req.user = {email, id};
            next();
        }else{
            res.status(401).json({message: "Unautorized"});
        }
     } catch (error) {
         res.status(401).json({ message: "Unauthorized", error });
     }
 
 };
 export default protect;