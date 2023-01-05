import { useState } from 'react'
import {createUseStyles} from 'react-jss'
import Hobbies from './Hobbies'
import Interests from './Interests'
import Skills from './Skills'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const useStyles = createUseStyles({
  view: {
    paddingTop: '4rem',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingBottom: '8rem',
    backgroundColor: '#e8eff6',
  },
  tabs: {
    marginLeft: '1.5rem',
  },
  selectedTab: {
    cursor: 'pointer',
  },
  unselectedTab: {
    backgroundColor: 'white'
  },
  boldHeader: {
    display: 'flex',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '24px',
    textAlign: 'center',
    color: 'white',
    textTransform: 'capitalize'
  },
  regularHeader: {
    display: 'flex',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '24px',
    textAlign: 'center',
    color: 'gray',
    textTransform: 'capitalize'
  },
})

const TAB_NAMES = [
  'skills',
  'hobbies',
  'interests',
]

const viewMap = {
  skills: {
    view: <Skills />,
    tabTitle: 'Skills',
  },
  hobbies: {
    view: <Hobbies />,
    tabTitle: 'Hobbies',
  },
  interests: {
    view: <Interests />,
    tabTitle: 'Interests',
  },
}

const Tabs = () => {
  const classes = useStyles()
  const [activeTabView, setActiveTabView] = useState(TAB_NAMES[0])

  const setTabViewClickHandler = (tab: string) => {
    setActiveTabView(tab)
  }

  const indexer = (element: string, index: number) => (element === activeTabView ? index : -1)

  return (
    <div className={classes.view}>
      <div role='tablist'>
      <Stack direction="row" spacing={4} className={classes.tabs}>
        {TAB_NAMES.map((tab, index) => (
          
          <Button 
            variant="contained"
            size='large'
            role='tab'
            tabIndex={TAB_NAMES.findIndex(indexer) === index ? 0 : -1}
            aria-selected={TAB_NAMES.findIndex(indexer) === index}
            key={tab}
            onClick={() => { setTabViewClickHandler(tab) }}
            onKeyDown={() => setTabViewClickHandler(tab)}
            className={tab === activeTabView ? classes.selectedTab : classes.unselectedTab}
          >
            <div className={tab === activeTabView ? classes.boldHeader : classes.regularHeader}>
              {TAB_NAMES[index] === 'skills' ? viewMap.skills.tabTitle : 
              ( TAB_NAMES[index] === 'hobbies' ? viewMap.hobbies.tabTitle : 
              ( viewMap.interests.tabTitle))}
            </div>
          </Button>
        
        ))}
         </Stack>
      </div>
      {activeTabView === 'skills' ? viewMap.skills.view :
      (activeTabView === 'hobbies' ? viewMap.hobbies.view : 
      viewMap.interests.view) }
    </div>
  )
}

export default Tabs