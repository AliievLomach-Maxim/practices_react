import FormUpdateUser from 'components/Form/FormUpdateUser'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from 'store/auth/selectors'
import { updateUserThunk } from 'store/auth/thunks'

const ProfilePage = () => {
    const { profile } = useSelector(authSelector)
    const dispatch = useDispatch()

    const handleSubmit = user => {
        dispatch(updateUserThunk({ id: profile._id, user }))
    }

    return <FormUpdateUser handleSubmit={handleSubmit} profile={profile} />
}

export default ProfilePage
