let quoteText = document.querySelector(".quote");
let personName = document.querySelector(".person");
let newQuoteBtn = document.querySelector("#new_quote");

const quotes = [
  {
    quoteText:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    personName: "Ralph Waldo Emerson",
  },
  {
    quoteText: "Without music, life would be a mistake.",
    personName: "Friedrich Nietzsche",
  },
  {
    quoteText:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    personName: "Bernard M. Baruch",
  },
  {
    quoteText: "If you tell the truth, you don't have to remember anything.",
    personName: "Mark Twain",
  },
  {
    quoteText:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    personName: "Maya Angelou",
  },
  {
    quoteText: "Doubt kills more dreams than failure ever will.",
    personName: "Suzy Kassem",
  },
  {
    quoteText:
      "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    personName: "Marilyn Monroe",
  },
  {
    quoteText:
      "Always remember that you are absolutely unique. Just like everyone else.",
    personName: "Margaret Mead",
  },
  {
    quoteText:
      "The future belongs to those who believe in the beauty of their dreams.",
    personName: "Eleanor Roosevelt",
  },
  {
    quoteText:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    personName: "Ralph Waldo Emerson",
  },
  {
    quoteText:
      "You will face many defeats in life, but never let yourself be defeated.",
    personName: "Maya Angelou",
  },
];

newQuoteBtn.addEventListener("click", function () {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[randomQuote].quoteText;
  personName.innerText = quotes[randomQuote].personName;
});
