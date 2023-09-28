import { Component, ComponentType } from "react";

export interface WithModalProps {
    showModal: (content: JSX.Element, onClose?: () => void) => void;
    hideModal: () => void;
    isModalVisible: boolean;
}

function withModal<T extends WithModalProps = WithModalProps>(
    WrappedComponent: ComponentType<T>
) {
    return class extends Component<Omit<T, keyof WithModalProps>> {
        state = {
            modalContent: null as JSX.Element | null,
            onClose: null as (() => void) | null,
            isModalVisible: false,
        };

        // Method to open the modal
        showModal = (content: JSX.Element, onClose?: () => void) => {
            this.setState({ modalContent: content, onClose, isModalVisible: true });
        };

        // Method to close the modal
        hideModal = () => {
            this.setState({ isModalVisible: false });
            // Delay hiding modal content for animation
            setTimeout(() => {
                this.setState({ modalContent: null, onClose: null });
            }, 300);
            if (this.state.onClose) {
                this.state.onClose();
            }
        };

        render() {
            const { modalContent, isModalVisible } = this.state;

            return (
                <>
                    <WrappedComponent
                        {...(this.props as T)}
                        showModal={this.showModal}
                        hideModal={this.hideModal}
                    />
                    {/* Render modal if content is provided */}
                    {modalContent && (
                        <div className={`modal overflow-y-auto pt-[10%] ${isModalVisible ? 'show' : ''}`}>
                            <div className="w-full relative z-40">{modalContent}</div>
                            <div className="inset-0 absolute z-30 cursor-pointer h-full" onClick={this.hideModal}></div>
                        </div>
                    )}
                </>
            );
        }
    };
}

export default withModal;
