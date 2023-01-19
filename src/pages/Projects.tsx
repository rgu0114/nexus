import { purple } from '@mui/material/colors'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  body: {
    flexDirection: 'column',
    margin: '3rem 0 1rem 0',
    color: '#777',
  },
  bigContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    columnGap: '2rem',
  },
  pictures: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  sectionHeader: {
    display: 'flex',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#333',
    font: '700 2.125rem/2.75rem "Open Sans", sans-serif',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    marginBottom: '4rem',
  }, 
  description: {
    flexDirection: 'column',
    maxWidth: '40rem',
    marginBottom: '4rem'
  },
  projectName: {
    width: 'fit-content',
    lineHeight: '16px',
    textAlign: 'center',
    color: '#33363B',
    font: '600 25px/30px opensans-bold, sans-serif',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    borderBottom: `2px solid ${purple[500]}`,
    paddingBottom: '0.5rem'
  },
  monopoly: {
    display: 'flex',
    width: '180px',
    marginTop: '3rem',
    marginBottom: '10rem'
  },
  mcdiver: {
    display: 'flex',
    //width: '180px',
    marginTop: '3rem',
    marginBottom: '12rem'
  },
  invaders: {
    display: 'flex',
    width: '240px',
    marginTop: '3rem',
    marginBottom: '12rem'
  },
  swift: {
    display: 'flex',
    width: '240px',
    marginTop: '3rem',
    marginBottom: '8rem'
  },
  blackjack: {
    display: 'flex',
    width: '240px',
    marginTop: '3rem',
    marginBottom: '4rem'
  },
  skills: {
    font: '18px librebaskerville-italic, serif',
    color: '#333',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
})

const Projects = () => {
  const classes = useStyles()
  return (
    <div className={classes.body}>
      <div className={classes.sectionHeader}> Projects </div>
        <div className={classes.bigContainer}>
          <div style={{flexDirection: 'column'}}>
            <div className={classes.description}>
              <div className={classes.projectName}>
                Cornellopoly
              </div>
              <div className={classes.skills}>
                Used: OCaml, Dune (build system), Makefile, Bisect (code coverage)
              </div>
              <div>
                I created a Cornell themed Monopoly game with three of my friends using 
                OCaml, the functional programming language we learned in CS 3110 (upper-level 
                functional programming/data structures course). Our vision was to create a thematic
                multiplayer game where the properties and utilities represent various landmarks on 
                Cornell's campus in a rather satirical way (airing our complaints of, say, the laundry system).
                I had a ton of fun working on this project with my friends because in addition to being able to 
                apply the methodologies and techniques we'd just learned in CS 3110, this was my first time 
                starting such a large scale project from scratch and building it up to a finished product. 
                This provided a unique opportunity to think about designing an efficient system architecture, 
                with frontend and backend components, and creating modules in a way that would avoid headaches down 
                the line. I think our design was fairly successful since we didn't have to deal with too many bugs 
                in the development process, due to good organization and unit testing. 
         
              
                Feel free to check out the repo and follow the Makefile instructions to play the game yourself!
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.projectName}>
                Optimized Pathfinding Simulation
              </div>
              <div className={classes.skills}>
                Used: Java, Dijkstra's Algorithm, Linear Optimization, Swing, AWT
              </div>
              <div>
                My final project for Cornell's OO Programming/Data Structures course involved creating 
                an algorithm that would lead a character (Martha Pollack, Cornell's President) to find the quickest path to a 
                magical glowing orb (find stage) and then collecting the most gold while fleeing to a collapsing cavern's exit (flee stage).
                I competed with 700+ other students to develop the highest scoring, fastest, and most efficient algorithm 
                – my solution scored in the top 5% of participants. For the find stage, I implemented Dijkstra's Shortest Path 
                Algorithm. For the flee stage, I used Hash Maps and Heaps to linearly optimize the amount of gold Martha collects by 
                by calculating a "desirability score" for all nearby tiles with gold – after running a simulation to find the ideal weights 
                for variables such as amount of gold on the tile, distance away from Martha, distance to exit, and proximity to other valuable tiles.
                I had a lot of fun pushing myself beyond what would've gotten me a good score and trying to optimize my solution to the greatest 
                extent possible, applying all I had learned in a semester of Data Structures. 
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.projectName}>
                Alien Invaders
              </div>
              <div className={classes.skills}>
                Used: Python, Coroutines, Generators, Sprite Sheets
              </div>
              <div>
              Alien Invaders is based off the Space Invaders arcade game. This game allows the player to shoot a 
              moving wave of aliens using a ship under their control. I became familiar with how to create a game 
              using frame by frame updates in object movements and using game states. I also animated ship and alien
              explosions using coroutines, which flipped through sprite sheets. I added several special features, 
              including sound effects each time an alien or the ship was hit, different colored bolts, and multiple 
              player lives. The player also wins money each time they hit an alien, which they can use to buy powerups 
              and more powerful bolts. This was one of my favorite projects, as it combined my interests in game design
              and visual effects, and I learned so much along the way. It was truly the best way to cap off my 
              semester of learning Python and put everything I had learned together into one project.
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.projectName}>
                Cornell Carpools
              </div>
              <div className={classes.skills}>
                Used: Swift, SwiftUI
              </div>
              <div>
              Cornell Carpool provides a place for students to find others in their area to carpool to various
              destinations, whether it be a routine weekly trip to Target or going home to Boston over break. 
              Users are welcome to either volunteer themselves as drivers, or to suggest destinations as a rider. 
              I created this app with a friend using SwiftUI, which I learned myself over break in order to gain 
              more flexibility in UI design and graphical layouts. Following my earlier decision to further explore 
              iOS development and seek out career prospects, I realized that some of the most cutting-edge and 
              advanced apps today are created using SwiftUI. I also wanted to gain another perspective to iOS 
              developemnt aside from UIKit, so I resolved to learn SwiftUI through an online course over winter 
              break and create a well-functioning app with it. Although it lacks the dynamicism of CU FindIt since 
              we didn't have Backend, Cornell Carpools was definitely more visually appealing and graphically 
              advanced, due to a combination of myself and my partner's maturing understanding of Swift programming,
              as well as the features inherent to SwiftUI.
              </div>
            </div>
            <div className={classes.description}>
              <div className={classes.projectName}>
                CU FindIt
              </div>
              <div className={classes.skills}>
                Used: Swift, UIKit, Django
              </div>
              <div>
              CU FindIt was created for students at Cornell to find lost items. Users can either report items they 
              lost and information about it (description, location, time, and picture, if available) or report 
              found items, with the same information. Both are added to a collection stored in the app's online
              database, facilitated by an API integrated in collaboration with Backend members of our team. 
              My iOS partner and I created the Frontend side using Swift's UIKit, using features such as CocoaPod
              Networking, delegation, a search bar filter, and haptics. This was the first large-scale and 
              functionally complete project I made after learning iOS development, and it was a great feeling to 
              put everything together, including Frontend + Backend (which certainly resulted in a lot of headaches,
              but was worth it) I loved every second of it, from creating beautiful UI interactions to getting our 
              data to save correctly. In addition, this was one of the few times that working on a project actually 
              sparked a desire to work on something similar professionally, so I am now actively seeking out 
              internships related to iOS development.
              </div>

            </div>
            <div className={classes.description}>
              <div className={classes.projectName}>
                Blackjack
              </div>
              <div className={classes.skills}>
                Used: Java, Java IO
              </div>
              <div>
              Blackjack is exactly what you would expect: a game of Blackjack. One of my first projects, Blackjack 
              was inspired by a night at the school dance, where I spent a good deal of time at the Blackjack table 
              getting hoodwinked. Anyways, I became interested in creating my own Blackjack game on my computer 
              after that night and used what I had learned in AP CS A, combined with online resouces, to make my 
              take on it. I added a currency system where the user won money from playing games and could use their 
              earnings to buy items like props and food. I created a GUI visual display for the cards. I also 
              programmed a (fairly unintelligent) computer for the user to play against. In the end, this is what 
              got me into game design and I hope to make more complicated and impressive (both visually and 
              functionally) games in the future.
              </div>

            </div>
            
          </div>
          <div className={classes.pictures}> 
            <img
              className={classes.monopoly}
              src='./images/monopoly.png'
              alt='Monopoly'
            />
            <video 
              className={classes.mcdiver}
              src="./images/mcdiver.mov" 
              poster="./images/shortestpath.png" 
              loop controls width="250">

            </video>
            <video 
              className={classes.invaders}
              src="./images/alieninvaders.mov" 
              poster="./images/alieninvaders.png" 
              loop controls width="250">

            </video>
            <img
              className={classes.swift}
              src='./images/cornellcarpool.png'
              alt='Cornell Carpool'
            />
            <img
              className={classes.swift}
              src='./images/cufindit.jpg'
              alt='CU FindIt'
            />
            <img
              className={classes.blackjack}
              src='./images/blackjack.jpg'
              alt='CU FindIt'
            />
          </div>
        </div>
      </div>
  )
}

export default Projects