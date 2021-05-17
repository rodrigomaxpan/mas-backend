
import { Request, Response } from "express";
import { AuthUserService } from "../services/AuthUserService";

class AuthController {
    async create(request:Request, response:Response) {
        const authData = request.body;

        const authenticateUser = new AuthUserService();

        const auth = await authenticateUser.execute(authData);

        return response.json(auth);

    }
}
export {AuthController}