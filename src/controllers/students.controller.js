import student from "../models/student";

const students = [
  {
    name: 'Samantha Caamal',
    matricula: 'a13008207'
  },
  {
    name: 'Rebeca Caamal',
    matricula: 'a15002014'
  },
  {
    name: 'Armando Lopez',
    matricula: 'a13005455'
  },
  {
    name: 'Cinthia Mendez',
    matricula: 'a15009985'
  },
  {
    name: 'Eduardo Caamal',
    matricula: 'a13002541'
  },
  {
    name: 'Samantha Caamal',
    matricula: 'a16002245'
  }
]

export const getStudents = async (req, res) => {
  res.json(students);
};

exports.getMeals = () => {
  return students;
};