import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { UbUiChipsComponent } from './ub-ui-chips.component';

@NgModule({
	declarations: [UbUiChipsComponent],
	imports: [MatChipsModule],
	exports: [UbUiChipsComponent]
})
export class UbUiModule {}
