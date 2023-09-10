import {
    Center,
    Text,
    Button,
    useColorModeValue,
    Wrap,
} from '@chakra-ui/react';
import {
    FaDiscord,
    FaFacebook,
    FaLinkedin,
    FaMediumM,
    FaReddit,
    FaTwitter,
} from 'react-icons/fa';
import { BsGithub, BsInstagram, BsLine, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const communityList = [
    {
        href: 'https://wa.me/qr/PQW5OSQ2J4NHP1',
        icon: <BsWhatsapp />,
        text: 'Whatsapp',
    },
    {
        href: 'https://twitter.com/alanwuuuuuu',
        icon: <FaTwitter />,
        text: 'Twitter',
    },
    {
        href: 'https://t.me/alanwu4321',
        icon: <BsTelegram />,
        text: 'Telegram',
    },
    {
        href: 'https://www.linkedin.com/in/alan-cl-wu/',
        icon: <FaLinkedin />,
        text: 'LinkedIn',
    },
    {
        href: 'https://www.instagram.com/alanwuuuuuu/',
        icon: <BsInstagram />,
        text: 'Instagram',
    },
    {
        href: 'https://github.com/alanwu4321',
        icon: <BsGithub />,
        text: 'Github',
    },
    
    {
        href: 'https://line.me/ti/p/1VxJG3lkKI',
        icon: <BsLine />,
        text: 'Line',
    },
    {
        href: 'https://www.facebook.com/alanwu4321/',
        icon: <FaFacebook />,
        text: 'Facebook',
    },
    // {
    //     href: 'https://www.tradingview.com/u/Crypto-Arsenal/',
    //     icon: (
    //         <>
    //             <svg
    //                 width='20'
    //                 height='20'
    //                 viewBox='0 0 36 27'
    //                 xmlns='http://www.w3.org/2000/svg'
    //             >
    //                 <path
    //                     d='M14 22H7V11H0V4h14v18zM28 22h-8l7.5-18h8L28 22z'
    //                     fill='currentColor'
    //                 ></path>
    //                 <circle cx='20' cy='8' r='4' fill='currentColor'></circle>
    //             </svg>
    //         </>
    //     ),
    //     text: 'TradingView',
    // },
];

export default function Community() {
    const { t } = useTranslation();
    return (
        <Wrap spacing='3px' gap="2" rowGap="2" justify='center' mt={3}>
            {communityList.map((community, i) => (
                <Button
                    key={i}
                    as='a'
                    href={t(community.href)}
                    target='_blank'
                    variant={'outline'}
                    leftIcon={community.icon}
                    bg="gray.50"
                    _dark={{ bg: "gray.800" }}
                    size={'sm'}
                >
                    <Center>
                        <Text>{community.text}</Text>
                    </Center>
                </Button>
            ))}
        </Wrap>
    );
}
