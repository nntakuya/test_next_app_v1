import { useRouter } from 'next/router'

const Article = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Article: {id}</p>
}

export default Article
