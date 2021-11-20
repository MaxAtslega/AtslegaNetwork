import type { NextPage } from "next"
import Link from "next/link"
import Layout from "@components/Layout"

const Privacy: NextPage = () => (
  <Layout title="Privacy">
    <main>
      <h1>Privacy</h1>

      <Link href="/posts">
        <a>Blog</a>
      </Link>
    </main>
  </Layout>
)

export default Privacy
