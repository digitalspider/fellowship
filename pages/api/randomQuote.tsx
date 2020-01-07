import allQuotes from '../../quotes.json';
import { NextApiResponse, NextApiRequest } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { author } = req.query;
  let quotes = allQuotes;

  const authorName = author instanceof Array ? author[0].toLowerCase() : author.toLowerCase();

  if (author) {
    quotes = quotes.filter(quote => quote.author.toLowerCase().includes(authorName));
  }
  if (!quotes.length) {
    quotes = allQuotes.filter(quote => quote.author.toLowerCase() === 'unknown');
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(quote);
};
