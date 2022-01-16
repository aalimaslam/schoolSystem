const fs = require("fs");

let studentCount = 0;
class Admission{
    course = {
        courseTaken : '',
        courseAmount : '',
        secondaryCourses : {
            secondaryCourseTaken : '',
            secondaryCourseAmount : ''
        }
    }


    constructor(name="unnamed",courseName="basics",secondCourse = "", admissionNumber = studentCount){
        this.name = name; 
        this.courseName = courseName
        this.secondCourse = secondCourse;
        this.admissionNumber = admissionNumber

        if(this.courseName != ''){
            
            if(this.courseName.toLowerCase() == "basics" || this.courseName.toLowerCase() == "basic"){
                this.course.courseTaken = "Basics"
                this.course.courseAmount = "1500"
            }
            else if(this.courseName.toLowerCase() == "web design" || this.courseName.toLowerCase() == "web designing" || this.courseName == "web dev" || this.courseName == "web" || this.courseName == "web development"){
                this.course.courseTaken = "Web Development"
                this.course.courseAmount = "3500"
            }
            else if(this.courseName.toLowerCase() == "c" || this.courseName.toLowerCase() == "basic c programming" || this.courseName.toLowerCase() == "basic c" || this.courseName.toLowerCase() == "c programming"){
                this.course.courseTaken = "Basic C Programming"
                this.course.courseAmount = "2000"
            }    
        }

        if(this.secondCourse != '' && this.courseName != ''){
            if(this.secondCourse.toLowerCase() == "basics" || this.secondCourse.toLowerCase() == "basic"){
                this.course.secondaryCourses.secondaryCourseTaken = "Basics"
                this.course.secondaryCourses.secondaryCourseAmount = "1500"
            }
            else if(this.secondCourse.toLowerCase() == "web design" || this.secondCourse.toLowerCase() == "web designing" || this.secondCourse == "web dev" || this.secondCourse == "web" || this.secondCourse == "web development"){
                this.course.secondaryCourses.secondaryCourseTaken = "Web Development"
                this.course.secondaryCourses.secondaryCourseAmount = "3500"
            }
            else if(this.secondCourse.toLowerCase() == "c" || this.secondCourse.toLowerCase() == "basic c programming" || this.secondCourse.toLowerCase() == "basic c" || this.secondCourse.toLowerCase() == "c programming"){
                this.course.secondaryCourses.secondaryCourseTaken = "Basic C Programming"
                this.course.secondaryCourses.secondaryCourseAmount = "2000"
            }
        }
        studentCount++;
    }

    getStudentDetails(){
        if(this.secondCourse != ''){
            let details = `${this.name}'s Roll Number is : ${studentCount} and Admission Number is ${this.admissionNumber} ; has Taken ${this.course.courseTaken} and ${this.course.secondaryCourses.secondaryCourseTaken} @ ${this.course.courseAmount} and ${this.course.secondaryCourses.secondaryCourseTaken} Respectively`
            console.log(details);
            return details
        }
        else if(this.courseName != ''){
            let details = `${this.name}'s Roll Number is : ${studentCount} and Admission Number is ${this.admissionNumber} ; has Taken ${this.course.courseTaken} @ ${this.course.courseAmount}`
            console.log(details);
            return details
        }
    }

    getAdmissionNumber(){
        console.log(`${this.name}'s Admission Number is : ${this.admissionNumber}`)
    }
    getCourseDetails(){
        let details = ''
        if(this.secondCourse != ''){
            details = `${this.name} Has Taken ${this.course.courseTaken} with ${this.course.secondaryCourses.secondaryCourseTaken} @ ${this.course.courseAmount} and ${this.course.secondaryCourses.secondaryCourseAmount} Respectively`
            
        }
        else if(this.courseName != ''){
            details = `${this.name} Has Taken ${this.course.courseTaken} @ ${this.course.courseAmount}`;
        }
        console.log(details);
        return details;
    }
    getRollNo(){
        console.log(`${this.name}'s Roll Number is ${studentCount}`)
    }
    saveDetails(){
        let details = this.getCourseDetails()
        console.log(details)
        console.log(typeof details)
        fs.appendFile("student details.txt", studentCount.toString() + ' ' + details + '\n' , (err) => {
            if (err) throw err;
            console.log("Completed!");
        });
    }
    
}

admissionNumber = Math.floor(Math.random() * 2000 + studentCount)


console.log("-----------------------------")

let student1 = new Admission("aalim","web","c", admissionNumber + studentCount);
student1.getStudentDetails()
student1.saveDetails()

console.log("-----------------------------")

let student2 = new Admission("umaid", "c","", admissionNumber + studentCount);
student2.getStudentDetails()
student2.saveDetails()

console.log("-----------------------------")

let student3 = new Admission("Shahid", "basics", "", admissionNumber + studentCount);
student3.getStudentDetails()
student3.saveDetails()

console.log("-----------------------------")



/*Admission Class Has Three Parameters Those are : 
    name of the student ,  primary course , secondary course , and admission number gets generated automatically
    
    if There is no secondary Course leave it blank 

    and it has 5 methods

    one is getStudentDetails {
        this method get all the details of a student
    }
    another one is getCourseDetails {
        this method Gets all the details about the course
    }
    another one is getRollNo {
        this one gets the roll number of a student
    }
    another one is getAdmission Number {
        this one gets the Admission Number of a student      
    }
    last but not least one is saveDetails() {
        this one saves the information provided in a file
    }

*/