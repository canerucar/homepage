import Head from 'next/head'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { Container, Link, Text } from '@chakra-ui/react'
import Social from '@comp/social'

function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <Container maxW="2xl">
        <Text fontSize="2xl">
          Merhaba, ben Adem. Evli ve iki çocuk babası olarak İstanbul'da
          yaşıyorum. Şu an{' '}
          <Link as={NextLink} href="http://superpeer.com" isExternal>
            <a>Superpeer</a>
          </Link>{' '}
          şirketinde Ürün Tasarımcısı olarak görev alıyorum.
        </Text>

        <Social mt={6} twitter github instagram superpeer youtube />
      </Container>

      <Container maxW="6xl" mt={20}>
        <NextImage
          src="/i-am.jpg"
          alt="Adem ilter"
          width={1433}
          height={1018}
          layout="responsive"
        />
      </Container>
    </>
  )
}

export default HomePage
