import { Link } from 'react-router-dom'
import '../styles/styles.css'
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { InputWithButton } from './search-bar'
import { IconChevronDown } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: 'white',
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    text: {
      textDecoration: 'none',
      color: 'gray',
      size: 1,
    },
  },

  subLink: {
    ...theme.fn.hover({
      backgroundColor: '#1a1a19',
    }),
  },
  hoverCard: {
    backgroundColor: '#1a1a19',
  },
  main: {
    backgroundColor: '#1a1a19',
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

const mockdata = [
  {
    title: 'Trending Movies',
    description:
      'Find out the best films according to critics and choose the best one for yourself',
    link: '/trending-movies',
  },
  {
    title: 'Trending TVs',
    description:
      'Find out the best TV series according to critics and choose the best one for yourself',
    link: '/trending-tvs',
  },
]

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const { classes, theme } = useStyles()

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align='flex-start'>
        <div>
          <Text size='sm' fw={500}>
            <Link to={item.link} className={classes.link}>
              {item.title}
            </Link>
          </Text>
          <Text size='xs' color='dimmed'>
            <Link to={item.link} className='link-text'>
              {item.description}
            </Link>
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ))

  return (
    <Box>
      <Header height={60} px='md' className={classes.main}>
        <Group position='apart' sx={{ height: '100%' }}>
          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a href='/' className={classes.link}>
              Home
            </a>
            <HoverCard
              width={600}
              position='bottom'
              radius='md'
              shadow='md'
              withinPortal
            >
              <HoverCard.Target>
                <Link to='/trending-all' className={classes.link}>
                  <Center inline>
                    <Box component='span' mr={5}>
                      Trending
                    </Box>
                    <IconChevronDown size={16} color='white' />
                  </Center>
                </Link>
              </HoverCard.Target>
              <HoverCard.Dropdown
                className={classes.hoverCard}
                sx={{ overflow: 'hidden' }}
              >
                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
          <InputWithButton></InputWithButton>
          <Group className={classes.hiddenMobile}>
            <Link to='/log-in' className={classes.link}>
              <Button variant='outline' color='gray'>
                Log in
              </Button>
            </Link>
            <Link to='/sign-up' className={classes.link}>
              <Button variant='outline' color='gray'>
                Sign up
              </Button>
            </Link>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        title='Navigation'
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx='-md'>
          <Group position='center' grow pb='xl' px='md'>
            <Button>Log in</Button>
            <Button variant='outline' color='gray'>
              Sign up
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
