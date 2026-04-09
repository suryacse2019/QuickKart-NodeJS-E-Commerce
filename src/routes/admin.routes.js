import { Router } from "express";
import { roleMiddleware } from "../middlewares/validator.middleware";


const router = Router();


router.route("/auth/login", roleMiddleware('admin'));