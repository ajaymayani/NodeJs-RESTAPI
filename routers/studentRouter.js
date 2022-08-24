const Student = require('../models/student');
const express = require('express');

const router = express.Router();

router.get('/students', async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).send(students)
    } catch (e) {
        res.status(400).send(e)
    };
})

router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const student = await Student.findById(_id);
        res.status(200).send(student)
    } catch (e) {
        res.status(400).send(e)
    };
})

router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete({ _id })
        if (!req.params.id) {
            return res.status(400).send()
        }
        res.status(200).send(deleteStudent);
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch("/students/:id", async (req, res) => {
    try {

        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body,{new:true});
        res.status(200).send(updateStudent);

    } catch (e) {
        res.status(404).send(e)
    }
})

router.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body)
        const createStudent = await student.save();
        res.status(201).send(createStudent);
    } catch (e) {
        res.status(400).send(e)
    }
})



module.exports = router;