import * as tslib_1 from "tslib";
import * as au from "../aurelia";
import { ConfigBuilder } from "../config-builder";
var MdButton = /** @class */ (function () {
    function MdButton(element, configBuilder) {
        this.element = element;
        this.configBuilder = configBuilder;
        this.disabled = false;
        this.flat = false;
        this.floating = false;
        this.large = false;
        this.small = false;
        this.pulse = false;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdButton.prototype.disabledChanged = function () {
        if (this.disabled) {
            this.attributeManager.addClasses("disabled");
        }
        else {
            this.attributeManager.removeClasses("disabled");
        }
    };
    MdButton.prototype.flatChanged = function () {
        if (this.flat) {
            this.attributeManager.addClasses("btn-flat");
        }
        else {
            this.attributeManager.removeClasses("btn-flat");
        }
    };
    MdButton.prototype.pulseChanged = function () {
        if (this.pulse) {
            this.attributeManager.addClasses("pulse");
        }
        else {
            this.attributeManager.removeClasses("pulse");
        }
    };
    MdButton.prototype.attached = function () {
        var classes = [];
        if (this.configBuilder.autoButtonWaves && !this.element.hasAttribute("md-waves")) {
            classes.push("waves-effect");
            if (this.flat) {
                classes.push("waves-accent");
            }
            else {
                classes.push("waves-light");
            }
            Waves.attach(this.element);
        }
        this.flatChanged();
        if (this.floating) {
            classes.push("btn-floating");
        }
        if (this.large) {
            classes.push("btn-large");
        }
        if (this.small) {
            classes.push("btn-small");
        }
        this.disabledChanged();
        this.pulseChanged();
        classes.push("btn");
        this.attributeManager.addClasses(classes);
    };
    MdButton.prototype.detached = function () {
        this.attributeManager.removeClasses(["btn", "btn-flat", "btn-large", "disabled", "pulse", "waves-accent", "waves-light", "waves-effect", "waves-block"]);
    };
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "disabled", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "flat", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "floating", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "large", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "small", void 0);
    tslib_1.__decorate([
        au.ato.bindable.booleanMd,
        tslib_1.__metadata("design:type", Boolean)
    ], MdButton.prototype, "pulse", void 0);
    MdButton = tslib_1.__decorate([
        au.customAttribute("md-button"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, ConfigBuilder])
    ], MdButton);
    return MdButton;
}());
export { MdButton };
//# sourceMappingURL=button.js.map