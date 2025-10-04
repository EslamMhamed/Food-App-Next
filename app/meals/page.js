import Link from 'next/link'

import classes from "./page.module.css"
import MealsGrid from '@/components/meals/MealsGrid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'


async function Meals(){
  const meals = await getMeals()
  return <MealsGrid meals={meals} />
}

async function MealsPage() {


  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
        <p >Choose tour favorite recipe and cook it yourself. it is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your  Favorit Recope</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetchin Meals</p>} >
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealsPage