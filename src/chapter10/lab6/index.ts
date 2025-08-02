//1. Tạo hai đối tượng học viên (student1, student2)
type TStudent = {
  id: number;
  name: string;
  email: string;
  isPremium: boolean;
  contact: string | number;
};
const student1: TStudent = {
  id: 1,
  name: "sinhvienh",
  email: "sv1@gmail.com",
  isPremium: true,
  contact: "sv1@gmail.com",
};
const student2: TStudent = {
  id: 2,
  name: "sinhvienh2",
  email: "sv1@gmail.com",
  isPremium: true,
  contact: 323434,
};

//2. Tạo một đối tượng khóa học (course) có thông tin:
type TCourse = {
  courseld: number;
  title: string;
  price: number;
  students: TStudent[];
};
const courseJava: TCourse = {
  courseld: 111,
  title: "java",
  price: 10323032,
  students: [],
};
const coursePython: TCourse = {
  courseld: 222,
  title: "python",
  price: 10323032,
  students: [],
};
//3. Viết hàm  Chức năng: Thêm học viên vào danh sách của khóa học.
const registerStudentToCourse = (student: TStudent, course: TCourse) => {
  course.students?.push(student);
};
//4. prinTCourseInfo
const prinTCourseInfo = (course: TCourse) => {
  console.log(`
    Id khóa học:${course.courseld},
    Tên khóa học:${course.title},
    Giá khóa học:${course.price},
    Số học viên khóa học:${course.students.length},
    `);
  if (course.students?.length == 0) {
    console.log("chưa có học viên đăng ký");
  } else {
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
