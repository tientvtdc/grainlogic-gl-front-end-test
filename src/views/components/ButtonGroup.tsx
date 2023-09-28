import React from "react";
import { ButtonProps } from "./Button";
import { v4 as uuidv4 } from "uuid";

interface ButtonGroupProps {
    name: string;
    buttons: ButtonProps[];
    onClick?: (buttons: ButtonProps[], name: string) => void;
}

class ButtonGroup extends React.Component<ButtonGroupProps> {
    render() {
        return (
            <div >
                <div className=" button-group-box" onClick={() => {
                    this.props.onClick && this.props.onClick(this.props.buttons, this.props.name);
                }}>
                    {this.props.buttons.slice(0, 4).map((button) => (
                        <div key={uuidv4()}>
                            <button.icon size="40" color="#FFF" variant="Bold" />
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-center font-medium text-white" >{this.props.name}</p >
            </div>
        );
    }
}

export default ButtonGroup;
