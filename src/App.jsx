import BlogCard from "./components/BlogCard.jsx";
import './Card.css';

function App() {
  const cardData = {
    image: './assets/images/Blogimage.png',
    category: 'HTML & CSS',
    date: '1 Вересня 2025',
    title: 'Практична №3',
    authorAvatar: './assets/images/avatar_male.png',
    author: "Dmytro Lykhota",
  };

  return (
    <main>
      <BlogCard
        image={cardData.image}
        category={cardData.category}
        date={cardData.date}
        title={cardData.title}
        authorAvatar={cardData.authorAvatar}
        author={cardData.author}
      />
    </main>
  );
}

export default App;
