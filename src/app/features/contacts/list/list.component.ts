import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { ColumnKeys, Contact } from '../contact.interfaces';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
    <section>
      <app-grid
        [displayedColumns]="displayedColumns"
        [data]="data"
        [sortableColumns]="sortables"
      />
    </section>
  `,
  styles: ``,
})
export class ListComponent implements OnInit {
  data!: Contact[];

  displayedColumns: ColumnKeys<Contact> = [
    'id',
    'name',
    'phone',
    'email',
    'action',
  ];
  sortables: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email'];

  private readonly _contactSvc = inject(ContactService);
  private readonly _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this._contactSvc
      .getAllContacts()
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        tap((contacts: Contact[]) => (this.data = [...contacts]))
      )
      .subscribe();
  }
}

/* import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { ColumnKeys, Contact } from '../contact.interfaces';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
    <section>
      <app-grid
        [displayedColumns]="displayedColumns"
        [data]="data"
        [sortableColumns]="sortables"
      />
    </section>
  `,
  styles: ``,
})
export class ListComponent implements OnInit {
  data!: Contact[];

  displayedColumns: ColumnKeys<Contact> = [
    'id',
    'name',
    'phone',
    'email',
    'action',
  ];
  sortables: ColumnKeys<Contact> = ['id', 'name', 'phone', 'email'];

  private readonly _contactSvc = inject(ContactService);
  private readonly _destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this._contactSvc
      .getAllContacts()
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        tap((contacts: Contact[]) => this.contacts.set(contacts))
      )
      .subscribe();
  }
}
 */
