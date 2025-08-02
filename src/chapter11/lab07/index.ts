export {};

console.log("lab 07");
const tbody = document.querySelector("#blogs tbody") as HTMLTableElement;

interface IBlog {
  title: string;
  author: string;
  content: string;
  id: number;
}

const fectBlogs = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const dataBlogs = (await res.json()) as IBlog[];
  // check lại hình thù data( join , zod....)
  if (dataBlogs.length) {
    dataBlogs.forEach((blog, index) => {
      // !: tôi chắc chắn phần từ có tồn tại
      tbody!.innerHTML += ` 
        <tr>
          <td>${blog.id}</td>
          <td>${blog.title}</td>
          <td>${blog.author}</td>
          <td>${blog.content}</td>
        </tr>
    `;
    });
  }
};

fectBlogs();
