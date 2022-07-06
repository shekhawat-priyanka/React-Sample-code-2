import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import errors from "./errors";
import emailTemplate from "./admin/emailTemplate";

export default combineReducers({
  auth,
  alert,
  errors,
  emailTemplate,
});
