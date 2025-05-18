import e, { Request, Response } from "express";
import { UserService } from "../services/UserServiceService";
import { UseServiceRepository } from "../repositories/useServiceRepository";

const serviceRepository = new UseServiceRepository();
const service = new UserService(serviceRepository);

export class UserServiceController {
  static async startSendEmailService(
    req: Request,
    res: Response
  ): Promise<void> {
    await service.sendServiceEmail(req.body);
    res.status(200).json({ status: "OK", msg: "Email Enviado com Sucesso" });
  }
}
