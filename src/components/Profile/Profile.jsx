import { useNavigate } from 'react-router-dom'
import { Container } from './Profile.styled'

const Profile = ({
    profile: { image, firstName, lastName, phone, gender, email },
}) => {
    const navigate = useNavigate()
    return (
        <Container onClick={()=>navigate('/profile')}>
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
