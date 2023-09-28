import { Component, ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

export default class HomeLayout extends Component<HomeLayoutProps> {
  render() {
    return (
      <div className="bg-layout-home">
        <div className="pt-6 md:pt-16 pb-16 md:pb-0">{this.props.children}</div>
      </div>
    );
  }
}
