import { useEffect } from 'react'
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

const Modal = ({ user: { firstName, image, email }, closeDetails }) => {
    useEffect(() => {
        const handleEsc = e => {
            e.code === 'Escape' && closeDetails()
        }
        document.addEventListener('keydown', handleEsc)

        return () => {
            document.removeEventListener('keydown', handleEsc)
        }
    }, [closeDetails])

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

export default Modal

Modal.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        image: PropTypes.string,
        email: PropTypes.string.isRequired,
    }),
    closeDetails: PropTypes.func.isRequired,
}
