import Link from 'next/link'
import React from 'react'

function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/share">
        Share Meals
      </Link>
      <p>
        <Link href="/meals/smothing">
        meal 1
      </Link>
      </p>
    </main>
  )
}

export default MealsPage