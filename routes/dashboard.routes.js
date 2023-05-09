const { Router } = require("express");
const { getEmployee, addNewEmployee, updateEmployeeData, deleteEmployeeData } = require("../controller/dashboard.controller");
const dashboardRouter = Router();

// get employees
dashboardRouter.get("/", getEmployee)

// add new employee in database
dashboardRouter.post("/", addNewEmployee);

//  update existed employee data
dashboardRouter.patch("/:editId", updateEmployeeData);

//  delete existed employee data
dashboardRouter.delete("/:deleteId", deleteEmployeeData)



















module.exports = dashboardRouter;