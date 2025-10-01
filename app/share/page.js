import Link from 'next/link'
import React from 'react'

function ShareMealPage() {
  return (
    <main>
        <p>Share Meal</p>
        <Link href="/meals">
            Meals Page
        </Link>
    </main>
  )
}

export default ShareMealPage