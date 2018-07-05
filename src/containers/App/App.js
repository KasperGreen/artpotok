import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from 'containers/MainContainer'
import 'moment/locale/ru'
import Moment from 'react-moment'
import AppContext from 'context/AppContext'
import { DETECTED_KEYBOARD_USER_CLASS_NAME } from 'constants/APP'
import 'normalize.css'
import './App.css'
import _ from 'lodash'
import AppUpdateNotifier from 'containers/App/AppUpdateNotifier'
import ym from 'react-yandex-metrika'
import { METRIKA_ID } from 'constants/METRIKA'
import 'fonts/BebasNeueRegular/stylesheet.css'
import 'fonts/Montserrat/stylesheet.css'
import AboutContainer from 'containers/AboutContainer'
import PageNotFound from 'containers/PageNotFoundContainer'
import ParticipationContainer from 'containers/ParticipationContainer'
import ProgramContainer from 'containers/ProgramContainer'
import InfoContainer from 'containers/InfoContainer'
import BuyTicketContainer from 'containers/BuyTicketContainer'
import {
  LECTURE_URL,
  MASTER_CLASS_URL,
  MUSIC_URL,
  PRACTICE_URL,
  PROGRAM_URL,
  TECHNO_ASHRAM_URL,
  VIDEO_MAPPING_URL,
  VJ_URL
} from 'constants/URL'
import { hot } from 'react-hot-loader'
import ProgramMusicContainer from 'containers/ProgramMusicContainer'
import ProgramMusicStageContainer from 'containers/ProgramMusicStageContainer'
import ProgramMusicArtistContainer from 'containers/ProgramMusicArtistContainer'
import ProgramMasterClassContainer from 'containers/ProgramMasterClassContainer'
import ProgramMasterClassListContainer from 'containers/ProgramMasterClassListContainer'
import ProgramTechnoAshramContainer from 'containers/ProgramTechnoAshramContainer'
import ProgramTechnoAshramEventContainer from 'containers/ProgramTechnoAshramEventContainer'
import ProgramVjContainer from 'containers/ProgramVjContainer'
import ProgramVideoMappingContainer from 'containers/ProgramVideoMappingContainer'
import ProgramLectureContainer from 'containers/ProgramLectureContainer'
import ProgramLectureListContainer from 'containers/ProgramLectureListContainer'
import ProgramPracticeListContainer from 'containers/ProgramPracticeListContainer'
import ProgramPracticeContainer from 'containers/ProgramPracticeContainer'
import UserState from 'context/User/UserState'

Moment.globalLocale = 'ru'

@UserState
class App extends Component {

  render () {

    return (
      <AppContext.Provider value={{}}>
        <Router>
          <div className="App">
            {/*<YMInitializer
              version="2"
              accounts={[METRIKA_ID]}
              options={{
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,

                trackHash: true,webvisor: true,
              }}
            />*/}
            <Route
              path={'/'} render={({location}) => {
              if (_.some(window['yaCounter' + METRIKA_ID])) {
                ym('hit', location.pathname)
              }
              return false
            }}
            />
            <Switch>
              <Route path={'/'} exact component={Main} />
              <Route path={'/about'} exact component={AboutContainer} />
              <Route path={'/participation'} exact component={ParticipationContainer} />
              <Route path={'/buy_ticket'} exact component={BuyTicketContainer} />


              <Route path={PROGRAM_URL} exact component={ProgramContainer} />

              <Route path={MUSIC_URL} exact component={ProgramMusicContainer} />
              <Route
                path={MUSIC_URL + '/:stage'}
                exact
                component={ProgramMusicStageContainer}
              />
              <Route
                path={MUSIC_URL + '/:stage/:artist'}
                exact
                component={ProgramMusicArtistContainer}
              />

              <Route
                path={MASTER_CLASS_URL}
                exact
                component={ProgramMasterClassListContainer}
              />
              <Route
                path={MASTER_CLASS_URL + '/:master_class_name'}
                exact
                component={ProgramMasterClassContainer}
              />

              <Route
                path={LECTURE_URL}
                exact
                component={ProgramLectureListContainer}
              />
              <Route
                path={LECTURE_URL + '/:lecture_name'}
                exact
                component={ProgramLectureContainer}
              />

              <Route
                path={PRACTICE_URL}
                exact
                component={ProgramPracticeListContainer}
              />
              <Route
                path={PRACTICE_URL + '/:practice_name'}
                exact
                component={ProgramPracticeContainer}
              />


              <Route
                path={TECHNO_ASHRAM_URL}
                exact
                component={ProgramTechnoAshramContainer}
              />
              <Route
                path={TECHNO_ASHRAM_URL + '/:event_name'}
                exact
                component={ProgramTechnoAshramEventContainer}
              />

              <Route
                path={VJ_URL}
                exact
                component={ProgramVjContainer}
              />

              <Route
                path={VIDEO_MAPPING_URL}
                exact
                component={ProgramVideoMappingContainer}
              />


              <Route path={'/info'} exact component={InfoContainer} />


              <Route component={PageNotFound} />

            </Switch>
            <AppUpdateNotifier />
          </div>
        </Router>
      </AppContext.Provider>
    )
  }

  keyboardUserEvent = e => {
    const keyCode = e.keyCode || e.which

    if (keyCode === 9) {
      if (typeof window !== 'undefined') {
        if (!_.get(window, DETECTED_KEYBOARD_USER_CLASS_NAME)) {
          window[DETECTED_KEYBOARD_USER_CLASS_NAME] = true
          const htmlRoot = document.getElementsByTagName('html')[0]
          htmlRoot.classList.add(DETECTED_KEYBOARD_USER_CLASS_NAME)
        }
      }
    }
  }
  mouseUserEvent = e => {
    const is_enter_press_click = e.clientX === 0 && e.clientY === 0
    if (
      !is_enter_press_click &&
      _.get(window, DETECTED_KEYBOARD_USER_CLASS_NAME)
    ) {
      window[DETECTED_KEYBOARD_USER_CLASS_NAME] = false
      document
        .getElementsByTagName('html')[0]
        .classList.remove(DETECTED_KEYBOARD_USER_CLASS_NAME)
    }
  }

  componentDidMount () {
    document.addEventListener('click', this.mouseUserEvent)
    document.addEventListener('keydown', this.keyboardUserEvent)

  }
}

export default hot(module)(App)
