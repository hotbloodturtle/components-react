import Child from "./Child";
import {ParentContainer} from "./ParentContainer";

const ParentContent = () => {
  const { data } = ParentContainer.useContainer()
  return (
    <div>
        <Child />
        <Child />
        parent - {data}
    </div>
  )
}

const Parent = () => {
  return (
    <ParentContainer.Provider>
      <ParentContent />
    </ParentContainer.Provider>
  )
}

export default Parent
