import { Router } from "express";
import { registroEmpresasValidator } from "../middlewares/validadores.js";
import { deleteFileOnError } from "../middlewares/delete-file-on-errors.js";
import { editarEmpresas, filtroEmpresas, listadoEmpresas, listadoEmpresasExcel,  registroEmpresas } from "./company.controller.js";

const router = Router()


//FORMULARIO REGISTRO EMPRESAS
router.post(
    "/registerCompany",
    registroEmpresasValidator,
    deleteFileOnError,
    registroEmpresas
)


//LISTADO DE EMPRESAS
router.get("/listCompanies", listadoEmpresas)


//LISTADO DE EMPRESAS POR EXCEL
router.get("/listCompaniesExcel", listadoEmpresasExcel)


//EDITAR EMPRESA
router.put("/editCompany/:uid", editarEmpresas)


router.get("/filtroEmpresas", filtroEmpresas)

export default router