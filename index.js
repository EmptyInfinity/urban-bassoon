import sql from'mssql';
import { config } from 'dotenv';
import {connectDb} from './db.js';
import {buildAPP} from './app.js';

(async () => {
    config();
    const db = await connectDb();
    buildAPP(db);
})();
