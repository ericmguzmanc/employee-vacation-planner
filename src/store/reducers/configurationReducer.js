import { DARK_MODE_SET, SIDEBAR_MENU_EXPANDED } from '../../utils/constants/actions.constants';

export function configurationReducer(
  state = {
    darkMode: false,
    sidebarExpanded: false,
  }
  , action) {
  switch(action.type) {
    case DARK_MODE_SET: 
      return Object.assign({}, state, { darkMode: !state.darkMode });
      
    case SIDEBAR_MENU_EXPANDED:
      return Object.assign({}, state, { sidebarExpanded: !state.sidebarExpanded });

    default: 
      return state;
  }
}