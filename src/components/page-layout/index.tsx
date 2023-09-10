import { Box, Center, Container, ContainerProps } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
};

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
  image?: string;
  ogTitle?: string
};

const MotionContainer = motion<ContainerProps>(Container);

const PageLayout = ({ title, description, children, image, ogTitle }: PageProps) => {
  const router = useRouter()
  return (
    <>
      <NextSeo
        title={title + ' | Alan Wu'}
        description={description}

        twitter={{
          cardType: 'summary_large_image',
          handle: 'alanwuuuuuu',
        }}
        openGraph={{
          url: 'https://links.alan-wu.com' + router.pathname,
          title: ogTitle ?? title + ' | Alan Wu',
          description: description,
          type: "website",
          locale: 'en_US',
          images: [
            {
              url: image ?? '/assets/images/1500x500.jpeg',
              // width: 1200,
              // height: 630,
              alt: 'Links | Alan Wu',
              type: 'image/png',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/assets/images/favicon.ico',
          },
        ]}
      />
      <Center
        display='flex'
        // justifyItems={'center'}
        w="100%"
        minH={{ base: 'auto', md: 'auto' }}
        px={{ base: 4, lg: 8 }}
      // initial='hidden'
      // animate='enter'
      // exit='exit'
      // variants={variants}
      // centerContent
      >
        {children}
      </Center>
    </>
  );
};

export default PageLayout;
