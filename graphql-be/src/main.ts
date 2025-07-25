import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Enables DTO validation
  app.enableCors({
    origin: 'http://localhost:3000', // <-- Frontend URL (change if needed)
    // credentials: true, // Optional: if you're sending cookies/auth headers
  });

  await app.listen(process.env.PORT ?? 4000);
  console.log(await app.getUrl())
}
bootstrap();
