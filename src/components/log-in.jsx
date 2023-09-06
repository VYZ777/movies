import React from 'react'
import { useToggle } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { Link } from 'react-router-dom'
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Stack,
} from '@mantine/core'
import { GoogleButton, TwitterButton } from '../libs/social-button'
import { HeaderMegaMenu } from './header'

export function AuthenticationForm(props) {
  const [type, toggle] = useToggle('login')
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  })

  return (
    <div>
      <HeaderMegaMenu></HeaderMegaMenu>
      <Group
        style={{
          width: '100%',
          marginTop: '5rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          style={{ backgroundColor: '#1a1a19' }}
          radius='md'
          p='xl'
          withBorder
          {...props}
        >
          <Text color='white' size='lg' weight={500}>
            Welcome to BTMovie
          </Text>

          <Group grow mb='md' mt='md' style={{ width: '30rem' }}>
            <GoogleButton
              style={{ backgroundColor: '#1a1a19', color: 'white' }}
              radius='xl'
            >
              Google
            </GoogleButton>
            <TwitterButton
              style={{ backgroundColor: '#1a1a19', color: 'white' }}
              radius='xl'
            >
              Twitter
            </TwitterButton>
          </Group>

          <Divider
            style={{ color: 'white' }}
            label='Or continue with email'
            labelPosition='center'
            my='lg'
          />

          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              {type === 'register' && (
                <TextInput
                  label='Name'
                  placeholder='Your name'
                  value={form.values.name}
                  onChange={(event) =>
                    form.setFieldValue('name', event.currentTarget.value)
                  }
                  radius='md'
                />
              )}

              <TextInput
                styles={{
                  input: { backgroundColor: '#262725', color: 'white' },
                  label: { color: 'white' },
                }}
                required
                label='Email'
                placeholder='email@btmovie.com'
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue('email', event.currentTarget.value)
                }
                error={form.errors.email && 'Invalid email'}
                radius='md'
              />

              <PasswordInput
                styles={{
                  input: { backgroundColor: '#262725', color: 'white' },
                  label: { color: 'white' },
                }}
                required
                label='Password'
                placeholder='Your password'
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue('password', event.currentTarget.value)
                }
                error={
                  form.errors.password &&
                  'Password should include at least 6 characters'
                }
                radius='md'
              />
            </Stack>

            <Group position='apart' mt='xl'>
              <Link
                to='/sign-up'
                style={{
                  color: 'gray',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  outline: 'none',
                }}
              >
                <Text>
                  {type === 'register'
                    ? 'Already have an account? Login'
                    : "Don't have an account? Register"}
                </Text>
              </Link>
              <Button variant='outline' color='gray' type='submit' radius='md'>
                Login
              </Button>
            </Group>
          </form>
        </Paper>
      </Group>
    </div>
  )
}
