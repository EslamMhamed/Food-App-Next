import Link from 'next/link'
import React from 'react'

function MealDetails({params}) {
  return (
    <main>
        <h1>Meal Details</h1>
        <p>Meal detal {params.mealslug}</p>
        <p>
            <Link href="/meals">Go to Meals</Link>
        </p>
    </main>
  )
}

export default MealDetails