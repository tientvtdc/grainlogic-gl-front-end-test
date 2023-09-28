/* eslint-disable react-refresh/only-export-components */
import { Component } from "react";
import HomeLayout from "../layouts/HomeLayout";
import sectionImage from "../../assets/images/hero_image.svg";
import ButtonGroup from "../components/ButtonGroup";
import {
    Additem,
    Box,
    Building,
    ChartSquare,
    Data,
    FavoriteChart,
    InfoCircle,
    LoginCurve,
    LogoutCurve,
    People,
    ShoppingCart,
    TicketDiscount,
} from "iconsax-react";
import Button, { ButtonProps } from "../components/Button";
import withModal, { WithModalProps } from "../../HOCs/withModal";
import ButtonGroupTable from "../components/ButtonGroupTable";

// Home page
export class Home extends Component<WithModalProps> {


    handleClick = (buttons: ButtonProps[], name: string) =>
        this.props.
            showModal(<ButtonGroupTable buttons={buttons} name={name} /> );


    render() {
        return (
            <HomeLayout>
                {/* Title Box  */}
                <div className="container mx-auto">
                    <div className="title-box">
                        <p>Welcome to </p>
                        <h1>GrainLogic!</h1>
                    </div>
                </div>

                <div>
                    <div className="container-box">
                        <div className="w-full md:w-1/2 mt-10 md:mt-28 ">
                            {/* Hero image */}
                            <img
                                src={sectionImage}
                                alt="Description of the image"
                                className="w-full max-w-full "
                            />
                        </div>
                        <div className="widgets-box w-full md:w-1/2 pt-12 md:pt-0">
                            {/* Explore button group */}
                            <ButtonGroup
                                name="Explore"
                                buttons={[
                                    { icon: Box, name: "Product Category" },
                                    { icon: Building, name: "Company" },
                                ]}
                                onClick={this.handleClick}
                            />

                            {/* Profiles button group */}
                            <ButtonGroup
                                name="Profiles"
                                buttons={[
                                    { icon: Additem, name: "Add Subscription" },
                                    { icon: InfoCircle, name: "Public Information" },
                                    { icon: FavoriteChart, name: "Business Information" },
                                    { icon: People, name: "Connection" },
                                ]}
                                onClick={this.handleClick}
                            />

                            {/* Explore button group */}
                            <ButtonGroup
                                name="Explore"
                                buttons={[
                                    { icon: ShoppingCart, name: "Online shop" },
                                    { icon: ChartSquare, name: "Product Dashboard" },
                                    { icon: TicketDiscount, name: "Offer Dashboard" },
                                ]}
                                onClick={this.handleClick}
                            />

                            {/* Other buttons */}
                            <Button icon={Data} name="Developer" />
                            <Button icon={LoginCurve} name="Message" />
                            <Button icon={LogoutCurve} name="Log out" />
                        </div>
                    </div>
                </div>
            </HomeLayout>
        );
    }
}

export default withModal(Home);