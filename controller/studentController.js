const studentSchema = require("../model/StudentModel")

const createStudent = async (req, res) => {
    try {
        const newStudent = studentSchema(req.body)
        const saveStudent = await newStudent.save()
        if (saveStudent) {
            res.send(saveStudent)
        }
    } catch (error) {
        console.log(error)
    }

}

const getStudents = async (req, res) => {
    try {
        const perPage = req.query.page || 0
        const numberOfStudents = 3
        const getStudent = await studentSchema.find().skip(numberOfStudents * perPage).limit(numberOfStudents)
        if (getStudent) {
            res.send(getStudent)
        }

    } catch (error) {
        console.log(error)
    }
}


const getSingleData = async (req, res) => {
    const oneData = await studentSchema.find(
        { _id: req.params.id }
    )
    if (oneData) {
        res.send(oneData)
    }
}
const updateStudents = async (req, res) => {
    const updateStudent = await studentSchema.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    if (updateStudent) {
        res.send(updateStudent)
    }
}


const deleteStudent = async (req, res) => {
    const deleteData = await studentSchema.deleteOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    if (deleteData) {
        res.send("deleted Student")
    }
}

//search Student Frontend

const searchStudentFrontend = async (req, res) => {
    try {
        const searchStudents = await studentSchema.find(
            { ID: req.body.ID }
        )
        if (searchStudents) {
            const total = await studentSchema.aggregate([
                {
                    $match: { ID: req.body.ID}
                },
                {
                    $group: {
                        _id: null,
                        totalSum: {
                            $sum: {
                                $add: ["$sub1", "$sub2", "$sub3", "$sub4"]
                            }
                        }
                    }
                }
            ])
            res.send({searchStudents, total})
        }
    } catch (error) {
        console.log(error)
    }
}


const searchStudent = async (req, res) => {
    const searchData = await studentSchema.find({
        $or: [
            { name: { $regex: req.params.key } },
            { ID: { $regex: req.params.key } },
        ]
    })

    if (searchData) {
        res.send(searchData)
    }

}
const getTotalMarks = async (req, res) => {
    const total = await studentSchema.aggregate([
        {
            $match: { ID: req.params.id }
        },
        {

            $group: {
                _id: null,
                totalSum: {
                    $sum: {
                        $add: ["$sub1", "$sub2", "$sub3", "$sub4"]
                    }
                }
            }
        }
    ])
    if (total) {
        const exam = await studentSchema.find({ID: req.params.id})

        res.send({ total, exam })
    }
}


const getTotalOfStudents = async (req, res) => {
    const total = await studentSchema.find().countDocuments()
    if (total) {
        res.send({ total })
    }
}
module.exports = { createStudent, getTotalOfStudents, getStudents, getSingleData, updateStudents, deleteStudent, searchStudent, searchStudentFrontend,getTotalMarks }