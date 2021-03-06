import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Activator } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ActivatorsService extends EntityCollectionServiceBase<Activator> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Application', serviceElementsFactory);
  }
}
