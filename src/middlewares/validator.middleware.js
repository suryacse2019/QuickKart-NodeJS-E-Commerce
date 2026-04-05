import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";


export const validate = (req, res, next) => {

    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    const extractedErrors = []
    errors.array().map((err) => extractedErrors.push({
         
        [err.path]:err.msg

    }));

    throw new ApiError(422, "Received data is not valid", extractedErrors);

}
 
export const roleMiddleware = (...allowedRoles) => {

  return (req, res, next) => {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({
          message: `Access denied. Allowed roles: ${allowedRoles.join(", ")}`
        });
      }

      next();

    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  };
};
 