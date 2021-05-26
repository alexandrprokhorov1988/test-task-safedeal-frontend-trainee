import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import Actions from '../redux/actions/index';

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Actions, dispatch);
};
