import { Router } from "express";
import { registroEmpresasValidator } from "../middlewares/validadores.js";
import { deleteFileOnError } from "../middlewares/delete-file-on-errors.js";
import { editarEmpresas, filtroEmpresas, listadoEmpresas, listadoEmpresasExcel,  registroEmpresas } from "./company.controller.js";

const router = Router()


router.post(
    "/registerCompany",
    registroEmpresasValidator,
    deleteFileOnError,
    registroEmpresas
)


router.get("/listCompanies", listadoEmpresas)


router.get("/listCompaniesExcel", listadoEmpresasExcel)


router.put("/editCompany/:uid", editarEmpresas)


router.get("/filtroEmpresas", filtroEmpresas)

export default router