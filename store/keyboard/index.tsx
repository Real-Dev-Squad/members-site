import {
  createContext,
  FC,
  KeyboardEvent,
  ReactElement,
  useContext,
  useState,
} from "react";
import { ALT_KEY } from "@/constants/AppConstants";
import { KEYBOARD_CONTEXT } from "@/types/member_store";

const KeyboardContext = createContext<KEYBOARD_CONTEXT>({isOptionKeyPressed : false});

function isOptionKey(e: KeyboardEvent) {
  return e.key === ALT_KEY;
}

export const KeyboardProvider: FC<{ children: ReactElement }> = ({
  children,
}): ReactElement => {
  const [isOptionKeyPressed, setIsOptionKeyPressed] = useState(false);

  const initialValue = {
    isOptionKeyPressed,
  };

  return (
    <KeyboardContext.Provider value={initialValue}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (isOptionKey(e)) {
            setIsOptionKeyPressed(true);
          }
        }}
        onKeyUp={(e) => {
          if (isOptionKey(e)) {
            setIsOptionKeyPressed(false);
          }
        }}
      >
        {children}
      </div>
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => {
  const context = useContext(KeyboardContext);
  if (!context)
    throw new Error(`keyboardContext context can only  
        be used in a component wrapped with keyboardContext`);
  return context;
};
