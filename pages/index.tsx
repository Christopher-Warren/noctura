import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Button, Card } from 'react-bootstrap'

import axios from 'axios'

export default function Home() {
  const [techyQuote, setTechyQuote] = useState<null | string>(null)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    axios
      .get(`https://techy-api.vercel.app/api/json`)
      .then((res) => {
        const quote = res.data.message

        setTechyQuote(quote)
      })
      .catch((e) => alert(`Getting data failed: ${e.message}`))
      .finally(() => setLoading(false))
  }, [])

  const handleClick = async () => {
    setLoading(true)
    axios
      .get(`https://techy-api.vercel.app/api/json`)
      .then((res) => {
        const quote = res.data.message

        setTechyQuote(quote)
      })
      .catch((e) => alert(`Getting data failed: ${e.message}`))
      .finally(() => setLoading(false))
  }

  return (
    <div>
      <Head>
        <title>Noctura</title>

        <meta name="description" content="Tech quote generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <Card.Header>Techy Quotes</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {loading && 'loading...'}
              {techyQuote}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">Someone smart</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <Button onClick={handleClick} className="mt-2">
        Random Techy Quote
      </Button>
    </div>
  )
}
