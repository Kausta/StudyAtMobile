/**
 * Study@
 * __________________
 *
 *
 * Licensed under a Proprietary License shared with this Work
 * under the name LICENSE (the 'License').
 * You MAY NOT USE this file except in compliance with the License.
 * 'The Authors' are defined in the License.
 *
 *
 * Copyright [2018] Study@, The Authors
 * All Rights Reserved.
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * Under all conditions, except rights given from an Explicit Grant defined in the License,
 * all information contained herein is, and remains the property of the Authors.
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'

import MainNavigator from 'navigators'
import { getActiveRouteName } from 'navigators/util'

type Props = {}
type State = {}
@connect(
  state => ({
    auth: state.auth,
  }),
  {},
)
export default class App extends Component<Props, State> {
  constructor() {
    super()
    this.state = {}
  }

  onNavigationStateChanged = (prevState, currentState) => {
    const currentScreen = getActiveRouteName(currentState)
    const prevScreen = getActiveRouteName(prevState)

    if (prevScreen !== currentScreen) {
      // the line below uses the Google Analytics tracker
      // change the tracker here to use other Mobile analytics SDK.

      // eslint-disable-next-line no-console
      console.log(currentScreen)
      firebase.analytics().setCurrentScreen(currentScreen, 'App')
    }
  }

  render() {
    return <MainNavigator onNavigationStateChange={this.onNavigationStateChanged} />
  }
}
