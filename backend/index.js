import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
//app.use(express.static('dist'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
    const data = [
        {
          id: 1,
          title: "Introduction to JavaScript",
          content: "JavaScript is a versatile scripting language used primarily for web development."
        },
        {
          id: 2,
          title: "React Basics",
          content: "React is a JavaScript library for building user interfaces."
        },
        {
          id: 3,
          title: "Understanding CSS",
          content: "CSS is used to style and layout web pages."
        },
        {
          id: 4,
          title: "Getting Started with HTML",
          content: "HTML is the standard markup language for creating web pages."
        },
        {
          id: 5,
          title: "Version Control with Git",
          content: "Git is a distributed version control system for tracking changes in source code."
        }
      ];
    res.json(data);
  });      

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});