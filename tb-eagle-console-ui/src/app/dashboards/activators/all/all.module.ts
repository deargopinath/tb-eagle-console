import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@app/shared/shared.module';

import { AllComponent } from './all/all.component';
import { ApplicationComponent } from './application/application.component';
import reducer, { featureKey } from './all.reducer';
import { AllEffects } from './all.effects';

@NgModule({
  declarations: [AllComponent, ApplicationComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature([AllEffects])
  ],
  exports: [AllComponent]
})
export class AllModule {}
