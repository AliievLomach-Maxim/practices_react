import { useNavigate } from 'react-router-dom'
import {
    Card,
    Typography,
    CardContent,
    CardMedia,
    Stack,
    Alert,
} from '@mui/material'

const Profile = ({
    profile: { image, firstName, lastName, phone, gender, email },
}) => {
    const navigate = useNavigate()
    return (
        <Card onClick={() => navigate('/profile')} sx={{ cursor: 'pointer' }}>
            <CardMedia
                sx={{ height: 340, boxShadow: '0 0 12px inset gray', m: 2 }}
                image={image}
                title={firstName}
            />
            <Stack>
                <Typography variant="h5" sx={{ m: '0 auto' }}>
                    {firstName} {lastName}
                </Typography>
            </Stack>
            <CardContent>
                <Stack spacing={3}>
                    <Alert variant="outlined" severity="info" icon={false}>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="subtitle1">Gender:</Typography>
                            <Typography variant="subtitle1">
                                {gender}
                            </Typography>
                        </Stack>
                    </Alert>
                    <Alert variant="outlined" severity="info" icon={false}>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="subtitle1">Phone:</Typography>
                            <Typography variant="subtitle1">{phone}</Typography>
                        </Stack>
                    </Alert>
                    <Alert variant="outlined" severity="info" icon={false}>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="subtitle1">Email:</Typography>
                            <Typography variant="subtitle1">{email}</Typography>
                        </Stack>
                    </Alert>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Profile
