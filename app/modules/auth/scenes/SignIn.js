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
import { Platform, StyleSheet } from 'react-native'
import { Container, Content, Text } from 'native-base'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

type Props = {}
type State = {}
@connect(
  state => ({
    auth: state.auth,
  }),
  {},
)
export default class SignIn extends Component<Props, State> {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Text style={styles.welcome}>Welcome to Study At!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
