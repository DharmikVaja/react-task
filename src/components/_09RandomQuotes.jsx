// Define a list of quotes
const quotes = [
  {
    body: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    body: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    body: "Do not watch the clock. Do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    body: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    body: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  // Add more quotes as needed
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const RandomQuote = () => {
  const quote = getRandomQuote();

  return (
    <div className="quote-container">
      <blockquote>
        <p>
          <q>{quote.body}</q>
        </p>
        <footer>— {quote.author}</footer>
      </blockquote>
    </div>
  );
};

export default RandomQuote;
