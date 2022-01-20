import { createContext, useContext } from 'react'
import userInfo from './userInfo'

const context = createContext({ userInfo })

export const useStores = () => useContext(context)