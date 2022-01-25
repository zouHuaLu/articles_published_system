import { createContext, useContext } from 'react'
import userInfo from './userInfo'
import articlesList from './articlesList'

const context = createContext({ userInfo,articlesList })

export const useStores = () => useContext(context)