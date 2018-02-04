var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, autoinject } from "aurelia-framework";
import { getBooleanFromAttributeValue } from "../common/attributes";
import { AttributeManager } from "../common/attributeManager";
import { getLogger } from "aurelia-logging";
let MdSidenav = MdSidenav_1 = class MdSidenav {
    constructor(element) {
        this.element = element;
        this.mdCloseOnClick = false;
        this.mdEdge = "left";
        this.mdFixed = false;
        this.mdWidth = 300;
        this.whenAttached = new Promise((resolve, reject) => this.attachedResolver = resolve);
        this.controlId = `md-sidenav-${MdSidenav_1.id++}`;
        this.log = getLogger("md-sidenav");
        this.whenAttached = new Promise((resolve, reject) => {
            this.attachedResolver = resolve;
        });
    }
    attached() {
        this.attributeManager = new AttributeManager(this.sidenav);
        if (getBooleanFromAttributeValue(this.mdFixed)) {
            this.attributeManager.addClasses("fixed");
            if (this.mdEdge === "right") {
                // see: https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge/issues/53
                this.attributeManager.addClasses("right-aligned");
            }
        }
        this.attachedResolver();
    }
    detached() {
        this.attributeManager.removeClasses(["fixed", "right-aligned"]);
    }
    mdFixedChanged(newValue) {
        if (this.attributeManager) {
            if (getBooleanFromAttributeValue(newValue)) {
                this.attributeManager.addClasses("fixed");
            }
            else {
                this.attributeManager.removeClasses("fixed");
            }
        }
    }
};
MdSidenav.id = 0;
__decorate([
    bindable
], MdSidenav.prototype, "mdCloseOnClick", void 0);
__decorate([
    bindable
], MdSidenav.prototype, "mdEdge", void 0);
__decorate([
    bindable
], MdSidenav.prototype, "mdFixed", void 0);
__decorate([
    bindable
], MdSidenav.prototype, "mdWidth", void 0);
MdSidenav = MdSidenav_1 = __decorate([
    customElement("md-sidenav"),
    autoinject
], MdSidenav);
export { MdSidenav };
var MdSidenav_1;