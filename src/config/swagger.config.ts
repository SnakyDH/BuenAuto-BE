import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Buen Auto API')
  .setDescription('Buen Auto API: BDA Project')
  .setVersion('1.0')
  .addTag('Buen Auto')
  .build();
