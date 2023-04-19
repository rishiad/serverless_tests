import type { VercelRequest, VercelResponse } from '@vercel/node';


export default async (req: VercelRequest, response: VercelResponse) => {
  
  response.status(200).send("Hello World!");

  return "Hello World!";
};
