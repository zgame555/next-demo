'use client'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function DomainName({}: Props) {
  const [domainName, setDomainName] = useState('')
  const [protocol, setProtocol] = useState('')
  const [port, setPort] = useState('')

  useEffect(() => {
    setDomainName(window.location.hostname)
    setProtocol(window.location.protocol)
    setPort(window.location.port)
  }, [])
  return (
    <>
      {protocol}//{domainName}:{port}
    </>
  )
}
