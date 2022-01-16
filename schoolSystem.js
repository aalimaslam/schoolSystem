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
    constructor(name,courseName,secondCourse = ""){
        this.name = name;
        this.courseName = courseName
        this.secondCourse = secondCourse;

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
            console.log(`${this.name}'s Admission No is : ${studentCount} ; has Taken ${this.course.courseTaken} and ${this.course.secondaryCourses.secondaryCourseTaken} @ ${this.course.courseAmount} and ${this.course.secondaryCourses.secondaryCourseTaken} Respectively`)
        }
        else if(this.courseName != ''){
            console.log(`${this.name}'s Admission No is : ${studentCount} ; has Taken ${this.course.courseTaken} @ ${this.course.courseAmount}`);
        }
    }

    getAdmissionNumber(){
        console.log(`${this.name}'s Admission No is : ${studentCount}`)
    }
    getCourseDetails(){
        if(this.secondCourse != ''){
            console.log(`${this.name} Has Taken ${this.course.courseTaken} with ${this.course.secondaryCourses.secondaryCourseTaken} @ ${this.course.courseAmount} and ${this.course.secondaryCourses.secondaryCourseAmount} Respectively`);
        }
        else if(this.courseName != ''){
            console.log(`${this.name} Has Taken ${this.course.courseTaken} @ ${this.course.courseAmount}`);
        }
    }
}

console.log("-----------------------------")

let student1 = new Admission("aalim","web","c");
student1.getStudentDetails()

console.log("-----------------------------")

let student2 = new Admission("umaid", "c");
student2.getStudentDetails()

console.log("-----------------------------")

