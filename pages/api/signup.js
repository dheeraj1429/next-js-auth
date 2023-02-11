import databaseConnection from '@/db/db';
import mongoose from 'mongoose';

async function handler(req, res) {
   databaseConnection();
   return res.json({ msg: 'done' });
}

export default handler;
