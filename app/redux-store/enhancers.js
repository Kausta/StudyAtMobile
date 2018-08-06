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

import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import R from 'ramda'
import ramdash from 'ramdash'

const _ = ramdash(R)

let middlewares = [thunk]

if (process.env.NODE_ENV !== 'production' && process.env.TEST !== 'true') {
  const logger = createLogger({
    collapsed: true,
    stateTransformer: state =>
      _.mapValues(state, reducer => {
        if (reducer.toJS) {
          return reducer.toJS()
        }

        return reducer
      }),
  })

  middlewares = [...middlewares, logger]
}

export default applyMiddleware(...middlewares)
