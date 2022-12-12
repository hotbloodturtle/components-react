import React, {
  ComponentType,
  createContext,
  ReactNode,
  useContext,
} from "react";

type ContainerProviderProps<State = void> = {
  initialState?: State;
  children: ReactNode;
};

type Container<Value, State = void> = {
  Provider: ComponentType<ContainerProviderProps<State>>;
  useContainer: () => Value;
};

export const createContainer = <Value, State = void>(
  useHook: (initialState?: State) => Value
): Container<Value, State> => {
  const Context = createContext<Value | null>(null);

  const Provider = (props: ContainerProviderProps<State>) => {
    let value = useHook(props.initialState);
    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  };

  const useContainer = (): Value => {
    const value = useContext(Context);
    if (value === null) {
      throw new Error("Provider 감싸슈");
    }
    return value;
  };

  return {
    Provider,
    useContainer,
  };
};
