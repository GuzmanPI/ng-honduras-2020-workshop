import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
	declarations: [UserCardComponent],
	imports: [CommonModule, MatButtonModule, MatIconModule],
	exports: [UserCardComponent]
})
export class SharedModule {}
