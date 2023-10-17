import { Button, Badge, ListIcon, ListItem, Box, Flex, Center, Text, Link } from '@chakra-ui/react';
import { BsPeopleFill, BsTools } from 'react-icons/bs';
import { CheckIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import ExpandableButton from './expandable-button';
import { FaApple, FaFacebook, FaShopify, FaYahoo } from 'react-icons/fa';

const style = {
    boxShadow:
        '0px 1px 25px -5px rgb(63 115 255 / 49%), 0 10px 10px -5px rgb(63 115 255 / 49%)',
    border: '1px solid #3F73FF',
    bg: '#3F73FF',
    icon: <BsTools color='white' />,
    text: 'Experiences',
    listSpacing: 3,
};

const positionList  = [
   
    // { name: 'job.Backend Internship' },
    // { name: 'job.Frontend Internship' },
    { name: 'SWE @ Facebook/Meta', icon:  <Flex gap="2"> <img src="/assets/images/fb.png" width='21'
    height='21'/> <img src="/assets/images/meta.png" width='19'
    height='19'/> </Flex> },
    { name: 'SRE @ Apple', icon: <FaApple/> },
    { name: 'SRE @ Tesla', icon: <img src="/assets/images/tesla.png" width='21'
    height='21'/> },
    { name: 'SRE @ Shopify', icon: <img src="/assets/images/shopify.svg" width='21'
    height='21'/> },
    { name: 'SWE @ Yahoo', icon: <img src="/assets/images/yahoo.png" width='21'
    height='21'/> },
   
];

const startupPositionList = [
    { name: 'CTO & CMO @ Crypto-Arsenal', icon: <Flex gap="2"> <img src="/assets/images/favicon.png" width='21'
    height='21'/>  </Flex>, badge: <Link target="_blank" href={"https://ca-marketing-2023.notion.site/ca-marketing-2023/About-Crypto-Arsenal-6f60573043da4828bf298722a8a8dc0c"} >  <Badge colorScheme='purple'  >   LEARN MORE 💡   </Badge>  </Link> },
    // { name: 'job.Backend Internship' },
  
];

const educationPositionList = [
    { name: 'Eng @ U of Waterloo', icon: <img src="/assets/images/uw.png" width='21'
    height='21'/> },
];

const jobWebList = [
    {
        href: 'https://s.crypto-arsenal.io/about-ca',
        color: 'purple',
        text: 'Learn about Crypto-Arsenal',
        openings: '1 NEW',
    },
  
];

const Position = () => {
    const { t } = useTranslation();
    return (
        <>
            <Text fontWeight={'bold'} > Startup </Text>
            {startupPositionList.map((position, i) => (
                <ListItem key={i}>
                     <Center gap={'2'}>
                    {position?.icon } 
                    {t(position.name)}
                    {position?.badge}
                     </Center>
                </ListItem>
            ))}
              {/* {jobWebList.map((web, i) => (
                <Button
                    key={i}
                    as='a'
                    href={web.href}
                    target={'_blank'}
                    mt={10}
                    // w={'full'}
                    bg={web.color + '.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                        bg: web.color + '.500',
                    }}
                    _focus={{
                        bg: web.color + '.500',
                    }}
                    rightIcon={<ExternalLinkIcon />}
                >
                    {t(web.text)}{' '}
                    <Badge colorScheme={web.color} ml={2}>
                        {' '}
                        {web.openings}{' '}
                    </Badge>
                </Button>
            ))} */}
            
            <Text fontWeight={'bold'}> Internship </Text>
            {positionList.map((position, i) => (
                <ListItem key={i}>
                     <Center gap={'2'}>
                    {position?.icon } 
                    {t(position.name)}
                     </Center>
                </ListItem>
            ))}
            <Text fontWeight={'bold'}> Education </Text>
             {educationPositionList.map((position, i) => (
                <ListItem key={i}>
                     <Center gap={'2'}>
                    {position?.icon } 
                    {t(position.name)}
                     </Center>
                </ListItem>
            ))}
        </>
    );
};

const JobWeb = () => {
    const { t } = useTranslation();
    return (
        <>
            {jobWebList.map((web, i) => (
                <Button
                    key={i}
                    as='a'
                    href={web.href}
                    target={'_blank'}
                    mt={10}
                    w={'full'}
                    bg={web.color + '.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                        bg: web.color + '.500',
                    }}
                    _focus={{
                        bg: web.color + '.500',
                    }}
                    rightIcon={<ExternalLinkIcon />}
                >
                    {t(web.text)}{' '}
                    <Badge colorScheme={web.color} ml={2}>
                        {' '}
                        {web.openings}{' '}
                    </Badge>
                </Button>
            ))}
        </>
    );
};

export default function Job() {
    return (
        <>
            <ExpandableButton style={style}>
                <Position />
                {/* <JobWeb /> */}
            </ExpandableButton>
        </>
    );
}
