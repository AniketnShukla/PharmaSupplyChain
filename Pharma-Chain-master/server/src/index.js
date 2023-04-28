require('dotenv').config();
import app from './app';
import { initContract } from './config/contracts.config';

app.listen(process.env.PORT, async () => {
    
    await initContract();
    const test = require('dotenv').config()
    console.log(test)
    console.log(`Server up on port ${process.env.PORT}!`);
    console.log('working');
});