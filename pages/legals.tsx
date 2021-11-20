import type { NextPage } from "next"
import Link from "next/link"
import Layout from "@components/Layout"

const Legals: NextPage = () => (
  <Layout title="Legals">
    <main>
      <h1>Legals</h1>

      <Link href="/posts">
        <a>Blog</a>
      </Link>
    </main>
  </Layout>
)

export default Legals
