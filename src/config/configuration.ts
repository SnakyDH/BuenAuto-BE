import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default registerAs('config', () => {
  return {
    database: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    server: {
      port: process.env.PORT || 3000,
    },
  };
});
