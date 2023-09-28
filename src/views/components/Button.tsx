import React from "react";
import { Icon } from "iconsax-react";

export interface ButtonProps {
    icon: Icon;
    name: string;
    onClick?: () => void;
}

class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <div className="flex-col flex items-center px-2 md:px-5 lg:px-7 pt-6 lg:pt-0">
                <button
                    className="button-custom"
                    onClick={this.props.onClick}
                >
                    <div className="custom-icon ">
                        <this.props.icon size={80} variant="Bold" />
                    </div>
                </button>
                <span className="text-white font-medium mt-8">{this.props.name}</span>
            </div>
        );
    }
}

export default Button;
