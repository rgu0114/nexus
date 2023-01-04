import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  view: {
    paddingTop: '4rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingBottom: '8rem',
    backgroundColor: '#e8eff6',
  }
})

const Tabs = () => {
  const classes = useStyles()

  return (
    <div className={classes.view}>
      hi
    </div>
  )
}

export default Tabs