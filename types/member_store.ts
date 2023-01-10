export interface DISPATCH {
  type: string;
  payload: any;
}

export interface MEMBER_STATE {
  members: Array<{}>;
  newMembers: Array<{}>;
  errorMsg: string;
}

export interface MEMBER_CONTEXT {
  state: MEMBER_STATE;
  dispatch: (input: DISPATCH) => void;
}

export interface KEYBOARD_CONTEXT {
  isOptionKeyPressed: Boolean;
}
