import React from 'react'
import { useState,useEffect } from 'react'
import finnHub from '../apis/finnHub'

export const StockList = () => {
  const [stock,setStock]= useState()
  const [watchList,setWatchList] = useState(["GOOGL","MSFT","AMZN"])

    useEffect(() => {
      let isMounted = true
        const fetchData = async () => {
          const responses = []
            try {
                const responses = Promise.all(watchList.map((stock)=>finnHub.get("/quote",{
                  
                })))
               
                console.log(responses)
                if (isMounted) {
                  setStock(responses)
                } 
            } catch (error) {
                
            }
        }
        fetchData()

        return()=>(isMounted=false)
    },[])

  return (
    <div>StockList</div>
  )
}