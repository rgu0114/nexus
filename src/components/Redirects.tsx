import { Button, createTheme, Stack, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { createUseStyles } from "react-jss";

const theme = createTheme({
  palette: {
    primary: {
      // Blueish.
      main: blue[500],
    },
    secondary: {
      // WHITE
      main: '#FFFFFF',
    },
  },
});

const useStyles = createUseStyles({
  view: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '2rem',
    marginBottom: '2rem',
    paddingTop: '0.5rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingBottom: '2.5rem',
    backgroundColor: '#e8eff6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '4rem',
  },
  buttons: {
    borderRadius: '5em'
  },
  logo: {
    height: '2rem',
  }
})

export default function Redirects() {
  const classes = useStyles() 

  return (
    <div className={classes.view}>
      <h1>
        Quick Links
      </h1>
      <div className={classes.links}>
      <Stack direction="row" spacing={4}>
        <ThemeProvider theme={theme}>
          <Button 
            variant="contained" 
            color='primary' 
            size='medium' 
            className={classes.buttons}
            href='https://www.linkedin.com/in/rgu0114/'
            target='_blank'
          >
            LinkedIn
          </Button>

          <Button 
            variant="contained" 
            color='primary' 
            className={classes.buttons}
            href='https://github.com/rgu0114'
            target='_blank'
          >
            GitHub
          </Button>

          <Button 
            variant="contained" 
            color='primary' 
            className={classes.buttons}
            href='./assets/rgu_resume.pdf'
            target='_blank'
          >
            Resume
          </Button>

          <Button 
            variant="contained" 
            color='primary' 
            className={classes.buttons}
            href='/experience'
          >
            Work Experience
          </Button>
        </ThemeProvider>
      </Stack>
        
      </div>
    </div>
  )
}