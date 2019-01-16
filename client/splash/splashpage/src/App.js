import React, { Component } from 'react'
import logo from './logo.svg'
import user from './user.svg'
import donor from './donor.svg'
import { Flex, Box } from 'rebass'
import './App.css'
import styled, { ThemeProvider } from 'styled-components'

const blue = '#07c'
const lightgray = '#f6f6ff'

const theme = {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64
  ],
  colors: {
    blue,
    lightgray
  },
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 2px'
    }
  }
}

const border = '3px solid black'

const Face = styled.img`
  max-width:75px;
`

const Header = styled(Box)({
  padding: '2rem',
  width: '100%',
  backgroundColor: '#29ABE2'
})

const Hero = styled(Header)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  borderBottom: border
})

const Info = styled(Hero)({
  backgroundColor: '#CCCCCC',
  width: '100%',
  borderBottom: border,
  zIndex: 2
})

const Foot = styled(Hero)({
  backgroundColor: '#FFB87F',
  width: '100%',
  zIndex: 2
})

const Title = styled.h2`
  font-size: 3rem;
`

const LeftTitle = Title

const RightTitle = styled(Title)({
  textAlign: 'right'
})

const Message = styled(Box)({
  fontFamily: 'Helvetica Neue',
  letterSpacing: '1px',
  maxWidth: '56rem',
  fontSize: '3vw',
  textAlign: 'left'
})

const Rectangle = styled.div`
  border: ${border};
  position:fixed;
  min-width:100%;
  min-height:100%;
  box-sizing:border-box;
  z-index:0;
`

const Line = styled.hr`
  border: 1.5px solid black;
`

const SmallText = styled.small`
  font-size: 2rem;
`

const Menu = styled(Flex)({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  top: 0,
  left: 0,
  zIndex: 2,
  minHeight: '150px',
  textAlign: 'center',
  width: '100%'
})

const MenuLink = styled(Box)({
  padding: '0rem 1.5rem',
  fontSize: '1.5rem'
})

const MenuLinkA = styled.a`
  backgroundColor: #29ABE2;
  borderRadius: 2rem;
`

const MenuButtonA = styled.a`
  text-decoration: none
`

const MenuButton = styled(MenuLink)({
  backgroundColor: '#FF7478',
  paddingBottom: '0.35rem',
  paddingTop: '0.25rem',
  borderRadius: '2rem',
  marginRight: '2rem',
  marginLeft: '1rem',
  border: border
})

const links = [
  'about', 'technology', 'locations'
]

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Rectangle />
          <Header>
            <Flex width={1.0} p={3} pb={0}>
              <Box width={100}>
                <Face src={logo} alt='logo' />
              </Box>
            </Flex>
            <Menu p={3} pb={0}>
              {links.map(link => <MenuLink><MenuLinkA href={'#' + link}>{link}</MenuLinkA></MenuLink>)}
              <MenuButton><MenuButtonA href='https://app.sunshine.community/'>sign in</MenuButtonA></MenuButton>
            </Menu>
          </Header>
          <Hero width={1.0}>
            <Message width={1.0}>
              <b>Sunshine</b> is a decentralized software mechanism for supplying <a href='#about'>life-essential products</a> to those in need.
              <br /><br />The economic drain of <i>purchasing necessities</i> can often make it incredibly difficult<sup>1</sup> to escape the cycle of poverty.
              <br /><br />This is <i>not a complete fix</i> for or replacement for welfare but a system to assist those looking for help with essentials<sup>2</sup>.
              <Line />
              <br /><SmallText><sup>1</sup><a href='https://aspe.hhs.gov/report/welfare-indicators-and-risk-factors-fourteenth-report-congress'>https://aspe.hhs.gov/report/welfare-indicators-and-risk-factors-fourteenth-report-congress</a></SmallText>
              <br /><SmallText><sup>2</sup><a href='https://www.pbs.org/newshour/show/hard-get-welfare'>https://www.pbs.org/newshour/show/hard-get-welfare</a></SmallText>
              <br /><br />
            </Message>
          </Hero>
          <Info width={1.0}>
            <Message width={1.0}>
              <h1><a name='about'># About</a></h1>
              The following diagrams explain the mechanism for <b>Sunshine</b> as viewed from both a "donor" and a "user" of the network.
              <LeftTitle>donor side</LeftTitle>
              <img src={donor} alt='donor' width='100%' />
              <RightTitle>user side</RightTitle>
              <img src={user} alt='user' width='100%' />
              Donors can also use the <b>Sunshine</b> website to view details of and contribute directly to certain purchases.
              <br /><br />
              <h1><a name='technology'># Technology</a></h1>
              Sunshine aims to be a decentralized mechanism for help. The network itself runs using the following technologies:
              <ul>
                <li><a href='https://bloom.co'>Bloom</a></li>
                <li><a href='https://truffleframework.com/'>Truffle Suite</a></li>
                <li><a href='https://nextjs.org/'>Next.js</a></li>
              </ul>
              <h1><a name='locations'># Locations</a></h1>
              The Sunshine organization works with community leaders to directly serve the needs of the constituents. We are starting small and expanding as we test our network. We are currently Beta testing in Queens, NY.
              <br /><br />
            </Message>
          </Info>
          <Foot width={1.0}>
            <Message width={1.0}>
              Built with love during the <a href='https://impactlabs.io'>Impact Fellowship</a> in NY.
            </Message>
          </Foot>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
