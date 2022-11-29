import {createContainer} from "./createContainer";
import {useEffect, useState} from "react";

const parentContainer = () => {
  const [data, setData] = useState<string>('')

  useEffect(() => {
    console.log('component mount..')
    setData('complete')
  }, [])
  return {
    data,
    setData
  }
}

export const ParentContainer = createContainer(parentContainer)
