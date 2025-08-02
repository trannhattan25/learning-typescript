"use strict";
const student1 = {
    id: 1,
    name: "sinhvienh",
    email: "sv1@gmail.com",
    isPremium: true,
    contact: "sv1@gmail.com",
};
const student2 = {
    id: 2,
    name: "sinhvienh2",
    email: "sv1@gmail.com",
    isPremium: true,
    contact: 323434,
};
const courseJava = {
    courseld: 111,
    title: "java",
    price: 10323032,
    students: [],
};
const coursePython = {
    courseld: 222,
    title: "python",
    price: 10323032,
    students: [],
};
//3. Viết hàm  Chức năng: Thêm học viên vào danh sách của khóa học.
const registerStudentToCourse = (student, course) => {
    course.students?.push(student);
};
//4. prinTCourseInfo
const prinTCourseInfo = (course) => {
    console.log(`
    Id khóa học:${course.courseld},
    Tên khóa học:${course.title},
    Giá khóa học:${course.price},
    Số học viên khóa học:${course.students.length},
    `);
    if (course.students?.length == 0) {
        console.log("chưa có học viên đăng ký");
    }
    else {
        const studentList = course.students.map((item) => {
            return item.name;
        });
        console.log("liệt kê từng học viên", studentList?.join(","));
    }
};
registerStudentToCourse(student1, courseJava);
registerStudentToCourse(student2, courseJava);
prinTCourseInfo(courseJava);
prinTCourseInfo(coursePython);
