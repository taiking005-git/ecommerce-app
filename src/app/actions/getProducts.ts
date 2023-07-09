import React from 'react'

export default async function getProducts() {

    const res = await fetch("")

    if (!res.ok) throw new Error("Error fetching data")


  return res.json;
}
