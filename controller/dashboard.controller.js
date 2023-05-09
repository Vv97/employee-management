
const dashboardModel = require("../model/dashboard.model");


const getEmployee = async (req, res) => {
    let { firstName, limit, page, department, salary, sort, order } = req.query;
    let obj = {};


    if (firstName) {
        obj.firstName = { $regex: firstName, $options: "i" }
    }


    if (department) {
        obj.department = department
    }


    if (!limit) {
        limit = 0;
    }


    if (!page) {
        page = 0;
    }


    let skip = (page - 1) * limit;


    let sortdata = {};

    if (sort) {
        sortdata[sort] = order
    }


    try {
        let employeesData = await dashboardModel.find(obj).skip(skip).limit(limit).sort(sortdata)
        res.status(200).send(employeesData)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

};


const addNewEmployee = async (req, res) => {
    try {
        let newEmployeedata = dashboardModel(req.body);
        await newEmployeedata.save();
        res.status(400).send({ message: "employee added successfuly" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};


const updateEmployeeData = async (req, res) => {
    let { editId } = req.params;
    try {
        if (editId) {
            await dashboardModel.findByIdAndUpdate({ _id: editId }, req.body);
            res.status(200).send({ message: "employee  updated succesfully" })
        }
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};


const deleteEmployeeData = async (req, res) => {
    let { deleteId } = req.params;
    try {
        if (deleteId) {
            await dashboardModel.findByIdAndDelete({ _id: deleteId });
            res.status(200).send({ message: "employee deleted succesfully" })
        }
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};



module.exports = { getEmployee, addNewEmployee, updateEmployeeData, deleteEmployeeData }