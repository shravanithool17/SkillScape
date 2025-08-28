// ASSIGNMENT 1

const students = [
  { name : "Tanvi", age : 19, rollno : 25172, branch : "Electronics & Computer Engineering" },
  { name : "Om", age : 19, rollno : 75, branch : "Electronics & TeleCommunication Engineering"},
  { name : "Shravani", age : 19, rollno : 25166, branch : "Electronics & Computer Engineering" }
];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log("Student", i + 1);
  for (let key in student) {
    console.log(key + ":", student[key]);
  }
  console.log("----");
}