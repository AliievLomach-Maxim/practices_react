import {
    CardActions,
    CardMedia,
    Button,
    Typography,
    Card,
    CardContent,
} from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const User = ({ user: { _id, firstName, image, email, phone }, isDetails }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = route => {
        navigate(route, { state: location.state })
    }

    const pathname = location.pathname === '/' ? '/users' : location.pathname

    return (
        <>
            {!isDetails && (
                <Button
                    variant="text"
                    sx={{ borderRadius: 30, p: 1 }}
                    onClick={() => handleClick(location.state)}
                >
                    <ArrowBackIosIcon fontSize="large" />
                </Button>
            )}
            <Card sx={{ maxWidth: isDetails ? 400 : 600, m: '0 auto' }}>
                <CardMedia
                    sx={{ height: 440 }}
                    image={image}
                    title={firstName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {firstName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Phone: {phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Email: {email}
                    </Typography>
                </CardContent>
                <CardActions>
                    {isDetails ? (
                        <Button
                            size="medium"
                            onClick={() =>
                                navigate(`${pathname}/${_id}`, {
                                    state: location,
                                })
                            }
                        >
                            Show Details
                        </Button>
                    ) : (
                        <Button
                            size="medium"
                            onClick={() => handleClick('posts')}
                        >
                            Posts
                        </Button>
                    )}
                </CardActions>
                <Outlet />
            </Card>
        </>
    )
}

User.propTypes = {
    user: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        image: PropTypes.string,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string,
    }),
    isDetails: PropTypes.bool,
}

export default User
