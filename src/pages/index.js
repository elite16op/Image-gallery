import { Inter } from 'next/font/google'
import ImageComp from '@/components/ImageComp'
import Search from '@/components/Search'
import { data } from './api/data'
import Page from '@/components/Page'
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const state = useSelector((state)=>state.pages)
  let dat = data.slice(state.range[0], state.range[1])
  const filter = useSelector((state)=>state.searchKey.text);
  let [newData, setNewdata]= useState(null);
  useEffect(()=>{
    const results = data.filter(obj => {
      return obj.tag.toLowerCase().includes(filter?.toLowerCase());
  });
  if (results!=null) {
    console.log(results);
    setNewdata(results);
  }
  if (filter == '') {
    setNewdata(null);
  }
  },[filter])


  return (
    <div className='w-[85%] mx-auto py-10'>
      <Head>
        <title>Image gallery</title>
      </Head>
    <Search />
    <div className='flex flex-wrap gap-5 box' style={{
      justifyContent : "center"
    }}>
    { !filter &&  
      dat.map((e)=>{
        return (
          <ImageComp key={e.id} url={e.url} description={e.tag} />
        )
      })
    }
    { newData &&  
      newData.map((e)=>{
        return (
          <ImageComp key={e.id} url={e.url} description={e.tag} />
        )
      })
    }
    </div>
    <div className='inline-block mx-auto my-2'>
      <Page />
    </div>
    </div>
  )
}
