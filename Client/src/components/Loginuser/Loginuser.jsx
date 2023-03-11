import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useNavigate()

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3040/Loginuser", {
        email, password
      })
        .then(res => {
          if (res.data === "exist") {
            history('/Addproduct', { state: { id: email } })
            console.log("Successfully login")
          }
          else if (res.data === "Notexist") {
            alert('User does not have account\n Create an Account')
          }
        })
        .catch(e => {
          alert("wrong details")
          console.log(e)
        })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => { setPassword(e.target.value) }}

            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}
            onClick={submit}>Log in</Button>
          <Typography
            endDecorator={<Link href="/Signup">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
