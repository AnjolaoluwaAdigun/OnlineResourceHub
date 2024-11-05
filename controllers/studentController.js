const Student = require('../models/student');
const bcrypt = require('bcrypt');

exports.registerStudent = async (req, res) => {
try {
    const { email, password, firstName, lastName, studyProgram } = req.body;

    // Check if email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new student
    const newStudent = new Student({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      studyProgram,
    });

    // Save student to database
    await newStudent.save();

    return res.json({ message: 'Student registered successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error registering student' });
  }
};