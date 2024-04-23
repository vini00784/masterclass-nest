import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // O Nest agora valida automaticamente os bodys a partir das classes que são passadas para eles. Nas classes, usar decorators para as devidas validações

  await app.listen(3000);
}
bootstrap();
