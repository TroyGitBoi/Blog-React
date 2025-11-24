import '../Card.css';

export default function BlogCard({ 
  image, 
  category, 
  date, 
  title, 
  description, 
  authorAvatar, 
  author 
}) {
  return (
    <article className="blog-card">
      {/* Використовуємо `image` з props. 
          `alt` важливий для доступності */}
      <img 
        src={image} 
        alt="Ілюстрація до статті блогу" 
        className="card-image" 
      />
      
      <div className="card-content">
        <span className="card-category">{category}</span>
        <p className="card-date">Публікація {date}</p>
        
        {/* Заголовок (h2) - це краще для семантики */}
        <h2 className="card-title">{title}</h2>
        
        <p className="card-description">Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки <strong>VS Code</strong>, а також реалізувати картку блогу для вдосконалення фундаментальних навичок з <strong>HTML та CSS.</strong></p>
        
        <div className="card-author">
          <img 
            src={authorAvatar} 
            alt="Аватар автора" 
            className="author-avatar" 
          />
          <span className="author-name">{author}</span>
        </div>
      </div>
    </article>
  );
}