"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logo.prototype.render = function () {
        var orgName = this.props.orgName || "";
        var alignment = this.props.alignment || "center";
        var copyRightDisplay = (this.props.isFooter) ? "block" : "none";
        var maxWidth = (this.props.small) ? "4em" : "8em";
        return (react_1.default.createElement("a", { href: "/", style: { display: "flex", alignSelf: alignment, flexDirection: "column", textDecoration: "none", color: "inherit" } },
            react_1.default.createElement("img", { style: {
                    maxWidth: maxWidth,
                    alignSelf: alignment
                }, src: this.props.logoUrl }),
            react_1.default.createElement("p", { style: { margin: "0", display: copyRightDisplay } },
                "\u00A9 2019 ",
                orgName)));
    };
    return Logo;
}(react_1.Component));
exports.default = Logo;
