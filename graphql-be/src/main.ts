import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // <-- Frontend URL (change if needed)
    // credentials: true, // Optional: if you're sending cookies/auth headers
  });

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
