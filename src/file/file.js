import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { fireEvent } from '../common/events';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('md-file')
@inject(Element)
export class MdFileInput {
  @bindable() mdCaption = 'File';
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) mdMultiple = false;
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdValue;

  _suspendUpdate = false;

  constructor(element) {
    this.element = element;
    this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
  }

  attached() {
    this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
    $(this.filePath).on('change', this.handleChangeFromNativeInput);
  }

  detached() {
    $(this.element).off('change', this.handleChangeFromNativeInput);
  }

  handleChangeFromNativeInput() {
    if (!this._suspendUpdate) {
      this._suspendUpdate = true;
      fireEvent(this.filePath, 'change');
      this._suspendUpdate = false;
    }
  }
}