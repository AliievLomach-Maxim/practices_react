import { PropTypes } from 'prop-types'
import {
    ButtonClose,
    ModalBody,
    ModalContainer,
    ModalContent,
    ModalHeader,
    ModalTitle,
    Overlay,
} from './Modal.styled'
import { Component } from 'react'

class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleEsc)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEsc)
    }

    handleEsc = e => {
        e.code === 'Escape' && this.props.closeDetails()
    }

    render() {
        const {
            user: { firstName, image, email },
            closeDetails,
        } = this.props
        return (
            <Overlay onClick={closeDetails}>
                <ModalContainer>
                    <ModalContent>
                        <ModalHeader>
                            <ModalTitle>{firstName} </ModalTitle>
                            <ButtonClose onClick={closeDetails}>×</ButtonClose>
                        </ModalHeader>
                        <ModalBody>
                            <img src={image} alt={'Avatar'} />
                            <p>Email: {email}</p>
                        </ModalBody>
                    </ModalContent>
                </ModalContainer>
            </Overlay>
        )
    }
}

export default Modal

Modal.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        image: PropTypes.string,
        email: PropTypes.string.isRequired,
    }),
    closeDetails: PropTypes.func.isRequired,
}
