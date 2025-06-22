import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      if (!state.favList.includes(action.id)) {
        return { ...state, favList: [...state.favList, action.id] };
      }
      return state;
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favList: state.favList.filter(id => id !== action.id) };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.photos };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.topics };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, singlePhotoDetail: action.photo };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, displayModal: action.open };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favList: [],
  photos: [],
  topics: [],
  singlePhotoDetail: '',
  displayModal: false,
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // Toggle favorite photo ID
  const updateToFavPhotoIds = (id) => {
    if (state.favList.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, id });
    }
  };
  
  // Set selected photo and open modal
  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, open: true });
  };
  
  // Close modal and clear selected photo
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, open: false });
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo: '' });
  };
  
  // Set photos and topics
  const setPhotoData = (photos) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos });
  const setTopicData = (topics) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics });
  
  // Derived state
  const doesFavPhotoExist = Array.isArray(state.favList) && state.favList.length > 0;
  
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: data }))
  }, []);
  
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics: data }))
  }, []);
  
  return {
    state: { ...state, doesFavPhotoExist },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    setPhotoData,
    setTopicData
  };
};

export default useApplicationData;
