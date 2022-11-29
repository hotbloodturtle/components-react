import {ParentContainer} from "./ParentContainer";

const Child = () => {
  const { data } = ParentContainer.useContainer()
  return (<div>child - {data}</div>)
}

export default Child
