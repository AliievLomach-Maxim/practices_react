import { useSelector } from 'react-redux'
import { LoaderContainer, LoaderSpinner } from './Loader.styled'
import { rootSelector } from 'store/root/rootSelector'

const Loader = () => {
    const { isLoading } = useSelector(rootSelector)
    return (
        isLoading && (
            <LoaderContainer>
                <LoaderSpinner />
            </LoaderContainer>
        )
    )
}

export default Loader
