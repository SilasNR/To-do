import { Test, TestingModule } from '@nestjs/testing';
import { EtiquetaController } from './etiqueta.controller';

describe('EtiquetaController', () => {
  let controller: EtiquetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtiquetaController],
    }).compile();

    controller = module.get<EtiquetaController>(EtiquetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
