import { legacy_createStore as createStore } from 'redux'

export const generateId = () => Math.floor(Math.random() * 95) + 1

const initialState = {
  comments: [
    {
      id: generateId(),
      body: 'Gayet güzel bir film.',
    },
    {
      id: generateId(),
      body: 'Beğenmedim.',
    },
    {
      id: generateId(),
      body: 'Oyuncular çok başarılıydı.',
    },
  ],
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      }

    default:
      return state
  }
}

export default createStore(commentsReducer)
