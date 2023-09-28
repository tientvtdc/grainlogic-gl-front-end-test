import { Component } from "react";
import Button, { ButtonProps } from "./Button";
import { v4 as uuidv4 } from "uuid";

interface ButtonGroupTableProp {
  name: string;
  buttons: ButtonProps[];
}

export class ButtonGroupTable extends Component<ButtonGroupTableProp> {
  render() {
    return (
      <>
        <p className="text-[64px] text-white text-center ">{this.props.name}</p>
        <div className="box-show-content">
            {this.props.buttons.map((button) => (
                <Button {...button} key={uuidv4()} />
            ))}
        </div>
      </>
    );
  }
}

export default ButtonGroupTable;
