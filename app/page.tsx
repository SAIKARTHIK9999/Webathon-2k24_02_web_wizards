"use client"
import React from 'react'
import '@passageidentity/passage-elements/passage-auth'
import styles from "../sass/Home.module.scss";
const page = () => {
  return (<>
    <div className='mt-16'>
      <div className='mt-16'>
      <h2 className={styles.heading}>
        <p className='text-center'>
        Welcome to 
        </p>
       <p className='text-blue-600 text-6xl text-center'>FitFocus</p>
      </h2>
      </div>
      <div className='mt-8'>
      <passage-auth app-id="tyIuMhCBY5xlBNZw22Pf0HT4"></passage-auth>
      <script src="https://psg.so/web.js"></script>
      </div>
    </div>
    <div className='mt-64'>

    </div>
  </>
  )
}

export default page

