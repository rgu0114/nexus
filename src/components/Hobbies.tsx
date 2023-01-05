import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  hobbies: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    font: '400 1rem/1.75rem "Open Sans", sans-serif',
    marginTop: '1rem',
    marginLeft: '1.5rem',
    minWidth: '500px',
  },
  picBox: {
    whiteSpace: 'nowrap',
    marginTop: '1rem',
    marginLeft: '2rem',
  },
  tennisPicture: {
    display: 'flex',
    
    width: '120px',
  },
  waterfallPicture: {
    display: 'flex',
   
    width: '200px',
  }
})

export default function Hobbies() {
  const classes = useStyles()
  return (
    <div style={{display: 'flex'}}>
      <p className={classes.hobbies}>
          Outside of academics and development work, I have a few hobbies I enjoy pursuing 
          in my free time.
         
        <p>
          The first is tennis. I've been playing tennis semi-competitively since middle school. 
          For the past year and a half, I've been a part of Club Tennis at Cornell.
          Although I compete in fewer tournaments now than in high school, I still love spending
          afternoons with friends playing casually, as it gives me an opportunity to stay active 
          and not be sitting at my desk all day. 
        </p>
        <p>
          I also really enjoy hiking - from both the challenge it presents and being able to 
          enjoy nature while I'm at it. After moving to California from Minnesota lsat year, I've 
          had far more hiking trails nearby, which has definitely been a plus. I also really like 
          taking pictures while hiking, whether of beautiful views or the occsional random pigeon!
        </p>
        <p>
          Cooking is also fun! I enjoy preparing all sorts of dishes, but meats most of all. Cutting 
          things up and dropping them in a pan is pretty satisfying. I love cooking 
          almost as much as I enjoy eating. 
        </p>
        <br/>
      </p>
      <div className={classes.picBox}>
        <img
            className={classes.tennisPicture}
            src='./images/tennis.jpeg'
            alt='tennis yearbook pic'
          />
        <img
          className={classes.waterfallPicture}
          src='./images/waterfall.png'
          alt='Cornell gorge waterfall'
        />
      </div>
      
    </div>
  )
}