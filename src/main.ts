import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const port = process.env.port
  await app.listen(port);
  console.log(`Online at port: ${port}, access in development at https://127.0.0.1:${port}`)
}
bootstrap();
