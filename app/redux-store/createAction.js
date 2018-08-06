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

import { createAction } from 'redux-actions'

/** Example usage:
 * createAsyncAction('CONFIG_ADD_CREDIT_CARD', async (userId, cc) => {
 *   let token = await stripe.createCreditCard(cc);
 /   await api.registerCreditCard(email, cc);
 * });
 */

export function createAsyncActionType(TYPE) {
  const TYPE_STARTED = `${TYPE}_STARTED`
  const TYPE_FAILED = `${TYPE}_FAILED`
  const TYPE_SUCCEED = `${TYPE}_SUCCEED`
  const TYPE_ENDED = `${TYPE}_ENDED`

  return {
    type: TYPE,
    TYPE_STARTED,
    TYPE_SUCCEED,
    TYPE_FAILED,
    TYPE_ENDED,
  }
}

/**
 * Creates an async action creator
 *
 * @param  {String} TYPE            the type of the action
 * @param  {Function} executeAsync  the function to be called async
 * @return {Function}                the action creator
 */
export function createAsyncAction(TYPE, executeAsync) {
  const TYPE_STARTED = `${TYPE}_STARTED`
  const TYPE_FAILED = `${TYPE}_FAILED`
  const TYPE_SUCCEED = `${TYPE}_SUCCEED`
  const TYPE_ENDED = `${TYPE}_ENDED`

  const actionCreators = {
    [TYPE_STARTED]: createAction(TYPE_STARTED),
    [TYPE_FAILED]: createAction(TYPE_FAILED),
    [TYPE_SUCCEED]: createAction(TYPE_SUCCEED),
    [TYPE_ENDED]: createAction(TYPE_ENDED),
  }

  function create(...args) {
    return async (dispatch, getState) => {
      let result
      const startedAt = new Date().getTime()
      dispatch(actionCreators[TYPE_STARTED]({ startedAt, ...args }))
      try {
        result = await executeAsync(...args, dispatch, getState)
        dispatch(actionCreators[TYPE_SUCCEED](result))
      } catch (error) {
        dispatch(
          actionCreators[TYPE_FAILED]({
            errorMessage: error.message,
          }),
        )
        throw error
      }
      const endedAt = new Date().getTime()
      dispatch(
        actionCreators[TYPE_ENDED]({
          endedAt,
          elapsed: endedAt - startedAt,
        }),
      )
      return result
    }
  }

  Object.assign(create, {
    TYPE,
    STARTED: TYPE_STARTED,
    FAILED: TYPE_FAILED,
    SUCCEED: TYPE_SUCCEED,
  })

  return create
}
