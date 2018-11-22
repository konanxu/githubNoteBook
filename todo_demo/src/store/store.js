import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'


const myPlugin = store => {
  console.log('plugin invoked')
  store.subscribe((mutation, state) => {
    console.log(mutation.type)
    console.log(mutation.payload)
  })
}

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    plugins: [myPlugin],
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 110
        },
        mutations: {
          updateText(state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          textPlus(state, getters, rootState) {
            console.log(getters)
            return state.text + rootState.b.text
          }
        },
        actions: {
          // add(ctx)
          add({ state, commit, rootState }) {
            // commit('updateText', rootState.count)
            commit('updateCount', 45667, { root: true })
          }
        }
      },
      b: {
        state: {
          text: 120
        }
      }
    }
  })
  if (module.hot) {
    module.hot.accept([
      './state/state.js',
      './mutations/mutations.js',
      './actions/actions.js',
      './getters/getters.js'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters
      })
    })
  }

  return store
}
