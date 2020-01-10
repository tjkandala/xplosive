import { IUserPreferences } from "../../types/workout";
import { AppAction } from "../../types/actions";

type UserPreferences = IUserPreferences | null;

const userPreferencesDefaultState: UserPreferences = null;

export const userPreferences = (
  state = userPreferencesDefaultState,
  action: AppAction
): UserPreferences => {
  switch (action.type) {
    default:
      return state;
  }
};
