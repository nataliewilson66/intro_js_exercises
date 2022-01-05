function Student(first, last) {
    this.first = first;
    this.last = last;
    this.courses = [];
}

function Course(name, department, credits, daysOfWeek, timeBlock) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.students = [];
    this.daysOfWeek = daysOfWeek;
    this.timeBlock = timeBlock;
}

Student.prototype.name = function () {
    return `${this.first} ${this.last}`;
}

Student.prototype.enroll = function (course) {
    this.courses.forEach (existingCourse => {
        if (course.conflictsWith(existingCourse)) {
            throw "Course conflict";
        }
    })
    this.courses.push(course);
    course.students.push(this);
}

Student.prototype.courseLoad = function () {
    // return a hash of departments to number of credits the student is taking in that department
    let courseHash = {};
    this.courses.forEach(x => courseHash[x.department] = 0);
    this.courses.forEach(x => courseHash[x.department] += x.credits);
    return courseHash;
}

Course.prototype.addStudent = function (student) {
    student.enroll(this);
}

Course.prototype.conflictsWith = function (course) {
    if (this.timeBlock !== course.timeBlock) {
        return false;
    }

    return this.daysOfWeek.some(day => course.daysOfWeek.includes(day));
}

let nat = new Student("Natalie", "Wilson");
console.log(nat.name());

let cs11 = new Course("Intro to OO Programming", "Computer Science", 4, ["Mon", "Wed", "Fri"], 2);
let cs12 = new Course("Object-Oriented Programming", "Computer Science", 4, ["Tues", "Thurs"], 2);
let math122 = new Course("Advanced Statistics", "Mathematics", 5, ["Mon", "Wed"], 5);

cs11.addStudent(nat);
cs12.addStudent(nat);
math122.addStudent(nat);
console.log(nat.courses);
console.log(nat.courseLoad());
console.log(cs11.students);

console.log(cs11.conflictsWith(math122));
let math52 = new Course("Linear Algebra", "Mathematics", 4, ["Mon", "Wed", "Fri"], 5);
console.log(math52.conflictsWith(math122));
//math52.addStudent(nat);
nat.enroll(math52);