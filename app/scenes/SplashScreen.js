/**
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Container, Content, Spinner } from 'native-base'

type Props = {}
type State = {}
@connect(
  state => ({
    auth: state.auth,
  }),
  {},
)
export default class SplashScreen extends React.Component<Props, State> {
  componentDidMount() {
    this.props.navigation.navigate('Auth')
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
          <Spinner />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
