import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {  cors: true });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Projeto 1 - M5')
    .setDescription('Aplicação para streaming de vídeos')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('user')
    .addTag('genre')
    .addTag('movie')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
