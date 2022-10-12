import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {

  newOption: any;
  emptyDataSelection = {
    name: 'Select'
  };

  @Input() options: any;
  @Output() currentSelectionChange = new EventEmitter<object>();
  _currentSelection: any;
  get currentSelection() {
    return this._currentSelection;
  }
  @Input()
  set currentSelection(value) {
    this._currentSelection =
      value === '' || value === null || value === undefined
        ? this.emptyDataSelection
        : value;
  }

  constructor() {
    this.newOption = '';
  }

  ngOnInit() { }

  setCurrentSelection(option) {
    this.currentSelection = option;
    this.currentSelectionChange.emit(option);
  }

  addNewData() { }
}