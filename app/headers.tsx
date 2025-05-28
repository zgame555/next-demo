import { headers } from 'next/headers'
import React from 'react'

type Props = {}

export async function Headers({}: Props) {
  const headerList = await headers()

  return <pre>{JSON.stringify(headerList, null, 2)?.replace(/{|}|"|\\/g, '')}</pre>
}
