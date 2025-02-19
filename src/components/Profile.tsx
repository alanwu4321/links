import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue,
    keyframes,
    Flex,
    Divider,
    useTheme,
    Icon,
    Link,
} from '@chakra-ui/react';

import { BsFillHeartPulseFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import Community from '../components/Community';
import WebLink from './WebLink';
import Flow from './Flow';
import Job from './Job';
import Partner from './Partner';
import QR from './QR';

const size = '96px';
const color = 'teal';

const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

export default function SocialProfileSimple() {
    const { t } = useTranslation();
    const banner = '/assets/images/1500x500.jpeg';
    const theme = useTheme();
    return (
        <Center py={3}>
            <Box
                // maxW={'620px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={4}
                pb={8}
                textAlign={'center'}
            >
                <Box
                    bg={`url(${banner})`}
                    bgSize='cover'
                    borderRadius='5px'
                    h='151px'
                    w='100%'
                />
                <Avatar
                    mt='-52px'
                    border='4px solid'
                    size={'xl'}
                    src={'/assets/images/alan.jpg'}
                    // alt={'Avatar Alt'}
                    mb={4}
                    pos={'relative'}
                    // _after={{
                    //     content: '""',
                    //     w: 4,
                    //     h: 4,
                    //     bg: 'green.300',
                    //     border: '2px solid white',
                    //     rounded: 'full',
                    //     pos: 'absolute',
                    //     bottom: 0,
                    //     right: 3,
                    // }}
                />

                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    <Flex
                        justify={'center'}
                        align='center'
                        letterSpacing={'wide'}
                        fontWeight='bold'
                    >
                        Alan Wu
                        <Box ml='1'>
                            <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M8.5247 15.1234C8.203 14.9251 7.797 14.9251 7.4753 15.1234L7.14873 15.3247C6.6942 15.6048 6.09974 15.4785 5.79845 15.0377L5.58199 14.721C5.36875 14.409 4.99785 14.2438 4.62332 14.2941L4.24311 14.3452C3.71392 14.4162 3.22226 14.059 3.12631 13.5338L3.05737 13.1564C2.98947 12.7847 2.7178 12.483 2.35519 12.3766L1.98709 12.2686C1.47475 12.1182 1.17088 11.5919 1.29687 11.0731L1.38738 10.7003C1.47655 10.333 1.35109 9.94692 1.0631 9.70224L0.770757 9.45385C0.363852 9.10813 0.300327 8.50373 0.626462 8.08096L0.860777 7.77722C1.0916 7.47801 1.13404 7.07424 0.970468 6.73358L0.804424 6.38776C0.573314 5.90643 0.761114 5.32844 1.23101 5.07488L1.56861 4.8927C1.90117 4.71324 2.10417 4.36164 2.0933 3.9839L2.08227 3.60044C2.06692 3.06672 2.47357 2.61509 3.00597 2.57457L3.38848 2.54546C3.76529 2.51678 4.09375 2.27814 4.23746 1.92864L4.38335 1.57385C4.5864 1.08002 5.1416 0.832836 5.64445 1.01237L6.00573 1.14135C6.36163 1.26842 6.75875 1.18401 7.03219 0.923173L7.30978 0.658391C7.69613 0.289852 8.30387 0.289852 8.69022 0.658392L8.96781 0.923173C9.24125 1.18401 9.63837 1.26842 9.99427 1.14135L10.3555 1.01237C10.8584 0.832836 11.4136 1.08002 11.6167 1.57385L11.7625 1.92864C11.9063 2.27814 12.2347 2.51678 12.6115 2.54546L12.994 2.57457C13.5264 2.61509 13.9331 3.06672 13.9177 3.60044L13.9067 3.9839C13.8958 4.36164 14.0988 4.71324 14.4314 4.8927L14.769 5.07488C15.2389 5.32844 15.4267 5.90643 15.1956 6.38776L15.0295 6.73358C14.866 7.07424 14.9084 7.47801 15.1392 7.77722L15.3735 8.08096C15.6997 8.50373 15.6361 9.10813 15.2292 9.45385L14.9369 9.70224C14.6489 9.94692 14.5234 10.333 14.6126 10.7003L14.7031 11.0731C14.8291 11.5919 14.5253 12.1182 14.0129 12.2686L13.6448 12.3766C13.2822 12.483 13.0105 12.7847 12.9426 13.1564L12.8737 13.5338C12.7777 14.059 12.2861 14.4162 11.7569 14.3452L11.3767 14.2941C11.0021 14.2438 10.6313 14.409 10.418 14.721L10.2015 15.0377C9.90026 15.4785 9.3058 15.6048 8.85127 15.3247L8.5247 15.1234Z'
                                    fill='#00B6FF'
                                />
                                <path
                                    d='M5.06998 7.56265L7.1913 9.68397L11.4339 5.44133'
                                    stroke='white'
                                    strokeWidth='2'
                                />
                            </svg>
                        </Box>
                    </Flex>
                </Heading>
                <Box mb={2}>
                    <Text
                        fontWeight={'semibold'}
                        color={'gray.500'}
                        as='a'
                        href='https://twitter.com/alanwuuuuuu'
                    >
                        @alanwuuuuuu
                    </Text>
                </Box>
                
                <Text
                    fontSize={'sm'}
                    fontWeight={'thin'}
                    textAlign={'center'}
                    letterSpacing={'wide'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                >
                    📍 Token 2049 🇸🇬 | TPE 🇹🇼 CA 🇨🇦 SF 🇺🇸 SYD 🇦🇺
                    <br/>
🏄🏻‍♂️🏂🛹🏈🏉🏀🎹🎻💻
                </Text>

                {/* <Flow /> */}
                {/* <WebLink /> */}
                <Community />

                {/* <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        Message
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        Follow
                    </Button>
                </Stack> */}
                <Box m={4}>
                    <Divider />
                </Box>
                <Center>
                    
                    <Stack
                        spacing={'40px'}
                        align={'center'}
                        w={'full'}
                        justify='center'
                    >
                
                        <Box w={'full'}>
                        
                            <Stack
                                spacing={'40px'}
                                align={'center'}
                                w={'full'}
                                justify='center'
                                // mt={'10px'}
                            >
                                <Job />
                            </Stack>
                        </Box>
                    </Stack>
                </Center>
                <Center mt="5">
                    <Stack
                        spacing={'40px'}
                        align={'center'}
                        w={'full'}
                        justify='center'
                    >
                        <Box w={'full'}>
                            <Stack
                                spacing={'40px'}
                                align={'center'}
                                w={'full'}
                                justify='center'
                                // mt={'10px'}
                            >
                                <QR />
                            </Stack>
                        </Box>
                    </Stack>
                </Center>

                <Box m={6}>
                    <Divider />
                </Box>

                {/* <Partner /> */}
            </Box>
        </Center>
    );
}
