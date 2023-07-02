import { Container } from './Profile.styled'

const Profile = ({
    profile: { image, firstName, lastName, phone, gender, email },
}) => {
    return (
        <Container>
            <figure>
                <img src={image} alt="Avatar" />
                <figcaption>
                    {firstName}
                    {lastName}
                </figcaption>
            </figure>
            <p>Gender: {gender}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </Container>
    )
}

export default Profile
