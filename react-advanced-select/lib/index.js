"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function valueByKey(item, key) {
    return key ? item[key] : item.title || item;
}
class AdvancedSelect extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.setValue = (value) => {
        };
        this.onChange = (e) => {
            const index = parseInt(e.currentTarget.value);
            if (index >= 0) {
                this.props.onChange(this.props.data[index]);
            }
        };
        this.selectElement = null;
    }
    componentDidUpdate(oldProps, oldState) {
        if (this.props.onUpdate) {
            this.props.onUpdate(oldProps, this.props, this);
        }
    }
    render() {
        const { data, label, onChange, dataItemTitle, dataItemTitleKey, } = this.props;
        const labelGenerator = dataItemTitle ? dataItemTitle : valueByKey;
        const dataList = data.map((item, index) => {
            const key = labelGenerator(item, dataItemTitleKey);
            return (react_1.default.createElement("option", { value: index, key: key }, key));
        });
        return (react_1.default.createElement("select", { className: "form-control", onChange: this.onChange, ref: selectElement => this.selectElement = selectElement },
            dataList.length ? react_1.default.createElement("option", { value: "-1" }, label) : null,
            dataList));
    }
}
exports.default = AdvancedSelect;
