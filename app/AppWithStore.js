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
import { Provider as StoreProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import firebase from 'react-native-firebase'

import store from './redux-store/store'
import App from './App'

type Props = {}
type State = {}
export default class AppWithStore extends Component<Props, State> {
  constructor() {
    super()
    this.state = {}
    firebase.analytics().setAnalyticsCollectionEnabled(true)
  }

  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <App />
        </PaperProvider>
      </StoreProvider>
    )
  }
}
