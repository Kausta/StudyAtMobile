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

// eslint-disable-next-line no-unused-vars
import React from 'react'

import { createStackNavigator } from 'react-navigation'
import { SignIn } from 'modules/auth/scenes'

const SignInStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SignIn',
  },
)
export default SignInStack
