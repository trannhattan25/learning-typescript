console.log("lab 07");
const tbody = document.querySelector("#blogs tbody");
const fectBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const dataBlogs = (await res.json());
    // check lại hình thù data( join , zod....)
    if (dataBlogs.length) {
        dataBlogs.forEach((blog, index) => {
            // !: tôi chắc chắn phần từ có tồn tại
            tbody.innerHTML += ` 
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
export {};
