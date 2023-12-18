import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import SearchKeyword from '../model/keywordModel.js';
dotenv.config();
const accessKey = process.env.ACCESS_KEY;
const accessTokenKey = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenKey = process.env.REFRESH_TOKEN_SECRET;

export const adminLogin = (req, res) => {
    try {
        const key = req.params.key;
        console.log(accessKey)
        console.log(key);
        if (key !== accessKey) {
            return res.status(400).json({
                success: false,
                message: "Authentication failed"
            })
        }
        const accessToken = jwt.sign({}, accessTokenKey, {
            expiresIn: "2m",
        });

        const refreshToken = jwt.sign({},refreshTokenKey, {
            expiresIn: "10m",
        });

        return res.status(200).json({ accessToken,refreshToken });

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const  adminDashboard = async(req,res)=>{
  
    const order = req.params.order === 'asc' ? 1 : -1;
  console.log(order)

  try {
    const result = await SearchKeyword.aggregate([
      { $group: { _id: '$keyword', count: { $sum: 1 } } },
      { $sort: { count: order } },
    ]);

    res.json(result);
  } catch (error) {
    throw error;
  }
   
}

export const mostSerachedKeyword=async(req,res)=>{
  const order = req.params.order === 'asc' ? 1 : -1;
  console.log(order)

  try {
    const result = await SearchKeyword.aggregate([
      { $group: { _id: '$keyword', count: { $sum: 1 } } },
      { $sort: { count: order } },
    ]);

    res.json(result);
  } catch (error) {
    throw error;
  }
}