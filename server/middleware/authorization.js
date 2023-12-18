import jwt from 'jsonwebtoken';

const accessTokenKey = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenKey = process.env.REFRESH_TOKEN_SECRET;
export const isAuthenticated = (req, res, next) => {
    try {
        let token = req.get("Authorization");
        // let token = req.headers.authorization;
        console.log(token)
        if (!token) {
            return res.status(404).json({ success: false, msg: "Token not found" });
        }
        token = token.split(" ")[1];
        try {
            const decoded = jwt.verify(token, accessTokenKey);

            console.log(decoded);
        } catch (error) {
            if (error.name === 'JsonWebTokenError') {

                console.error('Invalid token:', error.message);
                return res.status(403).json({ success: false, msg: "Invalid Token" });
            } else if (error.name === 'TokenExpiredError') {

                console.error('Token expired:', error.message);
                return res.status(401).json({ success: false, msg: error.message });
            } else {

                console.error('Error during token verification:', error.message);
                throw error;
            }
        }
        next();
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const verifyRefreshToken = (req, res) => {
    try {
        console.log(req.body);
        const { refreshToken } = req.body;
        console.log("gdfgdg", refreshToken)

        try {
            const isValid = jwt.verify(refreshToken, refreshTokenKey);
            console.log("vlaid", isValid)
            if (!isValid) {
                return res
                    .status(401)
                    .json({ success: false, message: "Invalid token,try login again" });
            }
        } catch (error) {
            if (error.name === 'JsonWebTokenError') {

                console.error('Invalid token:', error.message);
                return res.status(403).json({ success: false, msg: "Invalid Token" });
            } else if (error.name === 'TokenExpiredError') {

                console.error('Token expired:', error.message);
                return res.status(401).json({ success: false, msg: "token expired,login again" });
            } else {

                console.error('Error during token verification:', error.message);
                throw error;
            }
        }

        const newAccessToken = jwt.sign({}, accessTokenKey, {
            expiresIn: "2m",
        });
       
        return res.status(200).json({ success: true, newAccessToken});

    } catch (error) {
        throw error
    }

}