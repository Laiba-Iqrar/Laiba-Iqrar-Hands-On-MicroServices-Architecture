import { Router } from "express";
import AuthController from "../controllers/AuthController";

const userRouter = Router();
//USED ROUTERSS
userRouter.post("/register" as any, AuthController.register);
userRouter.post("/login" as any, AuthController.login);

export default userRouter;