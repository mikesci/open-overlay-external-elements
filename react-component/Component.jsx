import React from "react";

export default class extends React.Component {

    static manifest = {
        "name": "Component Example",
        "author": "MikeSci",
        "description": "A test demonstrating how to build a react component element.",
        "width": 500,
        "height": 500,
        "parameters": [
            { "name": "h1Text", "displayName": "Title Test", "type": "text", "defaultValue": "default value" },
            { "name": "h1Font", "displayName": "Title Font", "type": "font", "defaultValue": { "color": "#FFFFFF" } },
            { "name": "h1Style", "displayName": "Title Style", "type": "style" },
            { "name": "pText", "displayName": "Paragraph Test", "type": "textarea" },
            { "name": "pFont", "displayName": "Paragraph Font", "type": "font", "defaultValue": { "color": "#FFFFFF" } },
            { "name": "pStyle", "displayName": "Paragraph Style", "type": "style", "defaultValue": { "backgroundColor": "#8247cf", "borderRadius": "20px" } },
            { "group": "Unbound Input Tests", "items": [
                { "name": "checkboxtest", "displayName": "Checkbox Test", "type": "checkbox" },
                { "name": "selecttest", "displayName": "Select Test", "type": "select", "options": ["Option 1", "Option 2"] },
                { "name": "selecttestwithlabels", "displayName": "Select Test w/ Labels", "type": "select", "defaultValue": "opt1", "options": [ { label: "Option 1", value: "opt1" }, { label: "Option 2", value: "opt2" }] },
                { "name": "radiogrouptest", "displayName": "Radio Group", "type": "radiogroup", "options": [ { label: "Option 1", value: "opt1" }, { label: "Option 2", value: "opt2" }] },
                { "name": "slidertest", "displayName": "Slider", "type": "slider", "min": 0, "max": 100 }
            ]},
        ]
    };

    render() {
        return (
            <>
                <h1 style={Object.assign({}, this.props.h1Style, this.props.h1Font)}>{this.props.h1Text}</h1>
                <p style={Object.assign({}, this.props.pStyle, this.props.pFont)}>{this.props.pText}</p>
            </>
        );
    }
}