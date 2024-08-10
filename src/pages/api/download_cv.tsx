import type { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';
import { createReadStream } from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const filePath = join(process.cwd(), 'public', 'documents', 'Rehan.pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Rehan.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    const fileStream = createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
