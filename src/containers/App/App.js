import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from 'containers/MainContainer'
import 'moment/locale/ru'
import Moment from 'react-moment'
import AppContext from 'context/AppContext'
import { DETECTED_KEYBOARD_USER_CLASS_NAME } from 'constants/APP'
import 'normalize.css'
import './variables.css'
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
import BuyTicketContainer from 'containers/BuyTicketContainer'
import 'css/margins.css'
import {
  ADD_ASHRAM_URL,
  ADD_INFORMATION_URL,
  ADD_LECTURE_URL,
  ADD_MASTER_CLASS_URL,
  ADD_MUSIC_ARTIST_URL,
  ADD_MUSIC_STAGE_URL,
  ADD_PARTNER_URL,
  ADD_PRACTICE_URL,
  EDIT_ASHRAM_URL,
  EDIT_INFORMATION_URL,
  EDIT_LECTURE_URL,
  EDIT_MASTER_CLASS_URL,
  EDIT_MUSIC_ARTIST_URL,
  EDIT_MUSIC_STAGE_URL,
  EDIT_PAGE_URL,
  EDIT_PARTNER_URL,
  EDIT_PRACTICE_URL,
  INFORMATION_URL,
  LECTURE_URL,
  LOGIN_URL,
  LOGOUT_URL,
  MASTER_CLASS_URL,
  MUSIC_URL,
  PARTNER_URL,
  PRACTICE_URL,
  PROFILE_URL,
  PROGRAM_URL,
  REGISTER_URL,
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
import LoginContainer from 'containers/LoginContainer'
import ProfileContainer from 'containers/Profile'
import LogoutContainer from 'containers/LogoutContainer'
import RegisterContainer from 'containers/RegisterContainer'
import Test from 'containers/Test'
import StagesState from 'context/Stages/StagesState'
import NewStageContainer from 'containers/NewStageContainer'
import EditStageContainer from 'containers/EditStageContainer'
import NewArtistContainer from 'containers/NewArtistContainer'
import EditArtistContainer from 'containers/EditArtistContainer'
import ArtistsState from 'context/Artists/ArtistsState'
import PagesState from 'context/Pages/PagesState'
import EditPageContainer from 'containers/EditPageContainer'
import MastersState from 'context/Masters/MastersState'
import NewMasterContainer from 'containers/NewMasterContainer'
import EditMasterContainer from 'containers/EditMasterContainer'
import EditAshramContainer from 'containers/EditAshramContainer'
import NewAshramContainer from 'containers/NewAshram'
import EditPracticeContainer from 'containers/EditPracticeContainer/EditPracticeContainer'
import NewPracticeContainer from 'containers/NewPractice'
import AshramsState from 'context/Ashrams/AshramsState'
import PracticesState from 'context/Practices/PracticesState'
import NewInformationContainer from 'containers/NewInformation'
import EditInformationContainer from 'containers/EditInformationContainer'
import InformationListContainer from 'containers/InformationListContainer/InformationListContainer'
import InformationContainer from 'containers/InformationContainer/InformationContainer'
import NewLectureContainer from 'containers/NewLecture/NewLectureContainer'
import EditLectureContainer from 'containers/EditLectureContainer'
import NewPartnerContainer from 'containers/NewPartner'
import EditPartnerContainer from 'containers/EditPartnerContainer'
import PartnersListContainer from 'containers/PartnersListContainer'
import LecturesState from 'context/Lectures/LecturesState'
import InformationsState from 'context/Informations/InformationsState'

Moment.globalLocale = 'ru'

@UserState
@PagesState
@StagesState
@ArtistsState
@MastersState
@AshramsState
@PracticesState
@LecturesState
@InformationsState
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
              <Route path={'/test'} exact component={Test} />
              <Route path={'/participation'} exact component={ParticipationContainer} />
              <Route path={'/buy_ticket'} exact component={BuyTicketContainer} />

              <Route path={PROFILE_URL} exact component={ProfileContainer} />
              <Route path={LOGIN_URL} exact component={LoginContainer} />
              <Route path={LOGOUT_URL} exact component={LogoutContainer} />
              <Route path={REGISTER_URL} exact component={RegisterContainer} />


              <Route path={PROGRAM_URL} exact component={ProgramContainer} />

              <Route path={MUSIC_URL} exact component={ProgramMusicContainer} />

              <Route path={ADD_MUSIC_STAGE_URL} component={NewStageContainer} />
              <Route path={EDIT_MUSIC_STAGE_URL + '/:id'} component={EditStageContainer} />

              <Route path={ADD_MUSIC_ARTIST_URL + '/:stage_id'} component={NewArtistContainer} />
              <Route path={EDIT_MUSIC_ARTIST_URL + '/:id'} component={EditArtistContainer} />

              <Route
                path={MUSIC_URL + '/:stage_name'}
                exact
                component={ProgramMusicStageContainer}
              />
              <Route
                path={MUSIC_URL + '/:stage_name/:artist_name'}
                exact
                component={ProgramMusicArtistContainer}
              />


              <Route path={ADD_MASTER_CLASS_URL} component={NewMasterContainer} />
              <Route path={EDIT_MASTER_CLASS_URL + '/:id'} component={EditMasterContainer} />
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


              <Route path={ADD_PRACTICE_URL} component={NewPracticeContainer} />
              <Route path={EDIT_PRACTICE_URL + '/:id'} component={EditPracticeContainer} />
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


              <Route path={ADD_INFORMATION_URL} component={NewInformationContainer} />
              <Route path={EDIT_INFORMATION_URL + '/:id'} component={EditInformationContainer} />
              <Route
                path={INFORMATION_URL}
                exact
                component={InformationListContainer}
              />
              <Route
                path={INFORMATION_URL + '/:information_name'}
                exact
                component={InformationContainer}
              />


              <Route path={ADD_LECTURE_URL} component={NewLectureContainer} />
              <Route path={EDIT_LECTURE_URL + '/:id'} component={EditLectureContainer} />
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


              <Route path={ADD_PARTNER_URL} component={NewPartnerContainer} />
              <Route path={EDIT_PARTNER_URL + '/:id'} component={EditPartnerContainer} />
              <Route
                path={PARTNER_URL}
                exact
                component={PartnersListContainer}
              />


              <Route path={ADD_ASHRAM_URL} component={NewAshramContainer} />
              <Route path={EDIT_ASHRAM_URL + '/:id'} component={EditAshramContainer} />
              <Route
                path={TECHNO_ASHRAM_URL}
                exact
                component={ProgramTechnoAshramContainer}
              />
              <Route
                path={TECHNO_ASHRAM_URL + '/:ashram_name'}
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


              <Route
                path={EDIT_PAGE_URL + '/:page_id/:section_name'}
                exact
                component={EditPageContainer}
              />


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
