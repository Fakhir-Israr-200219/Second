const studentModel = require("../Models/student.model");
const asyncHandler = require("express-async-handler");

const getAllData = asyncHandler(async (req, res) => {
    const students = await studentModel.find();
    res.status(200).json(students);
})

const getStudentById = asyncHandler(async (req, res) => {
    const student = await studentModel.findById(req.params.id);
    if (!student) {
        res.status(404);
        throw new Error("student not found");
    }
    res.status(200).json(student);
})

const addStudent = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    const student = await studentModel.create({ name, email, phone });
    res.status(201).json(student);

})

const updatestudent = asyncHandler(async (req, res) => {

    const id = req.params.id;

    const stu = await studentModel.findById(id);
    if (!stu) {
        res.status(404);
        throw new Error("student not found");
    }

    const student = await studentModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "student has updated", student });
})

const deleteStudent = asyncHandler(async (req, res) => {
    const student = await studentModel.findById(req.params.id);
    if (!student) {
        res.status(404);
        throw new Error("student not found");
    }
    const stu = await studentModel.deleteOne(req.params.id);
    req.status(200).json({ message: "Student was deleted", stu });
})

module.exports = {
    getAllData,
    getStudentById,
    addStudent,
    updatestudent,
    deleteStudent
}

