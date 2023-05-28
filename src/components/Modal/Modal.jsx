import React from 'react'
import {
    ButtonClose,
    ModalBody,
    ModalContainer,
    ModalContent,
    ModalHeader,
    ModalTitle,
    Overlay,
} from './Modal.styled'

const Modal = ({ user: { name, avatarUrl, email, hasJob }, closeDetails }) => {
    return (
        <Overlay>
            <ModalContainer>
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle>{name} </ModalTitle>
                        <ButtonClose onClick={closeDetails}>×</ButtonClose>
                    </ModalHeader>
                    <ModalBody>
                        <img src={avatarUrl} alt={'Avatar'} />
                        <h4>Has Job: {hasJob.toString()}</h4>
                        <p>Email: {email}</p>
                    </ModalBody>
                </ModalContent>
            </ModalContainer>
        </Overlay>
    )
}

export default Modal
