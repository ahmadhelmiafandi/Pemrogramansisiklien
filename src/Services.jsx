export const users = [
  {
    name: "April",
    email: "april@gmail.com",
    street: "Jl. Indraprasta",
    city: "Semarang",
    age: 25,
  },
  {
    name: "Yani",
    email: "yani@gmail.com",
    street: "Jl. Imam Bonjol",
    city: "Ungaran",
  },
  {
    name: "Safitri",
    email: "safitri@gmail.com",
    street: "Jl. Pemuda",
    city: "Kendal",
  },
];

export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    return posts.map((post) => ({
      id: post.id,
      title: post.title,
      body: post.body,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};
