import { Box, Circle, Image as Img, HStack, Link} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const socialsList = () => {
    return (
        <Box>
            <HStack spacing={5}>
                <Link href='https://github.com/Devd0' isExternal>
                    <Circle size={8} bg='brand.lightGreen'>
                        <Img p={1.5} src='/images/Github.svg' alt='github'/>
                    </Circle>
                </Link>
                <Link href='mailto: dmb.programmer@gmail.com' isExternal>
                    <Circle size={8} bg='brand.lightGreen'>
                        <FontAwesomeIcon color='black' icon={faEnvelope} />
                    </Circle>
                </Link>
                <Link href='https://www.linkedin.com/in/real-darren-baldwin/' isExternal>
                    <Circle size={8} bg='brand.lightGreen'>
                        <Img p={1.5} src='/images/LinkedIn.svg' alt='github'/>
                    </Circle>
                </Link>
            </HStack>
        </Box>
    )
}

export default socialsList