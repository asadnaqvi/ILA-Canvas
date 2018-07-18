import { TestBed, inject } from '@angular/core/testing';

import { ImageConnectorService } from './image-connector.service';

describe('ImageConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageConnectorService]
    });
  });

  it('should be created', inject([ImageConnectorService], (service: ImageConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
