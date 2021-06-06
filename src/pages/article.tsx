import Article from '../components/Article'

export default function ArticleList({ allArticles }) {
  return allArticles.map((article, index) => {
    return (
      <Article
        key={index}
        title={article.title}
        description={article.description}
        purpose_category={article.purpose_category}
        tag={article.tag}
      />
    )
  })
}

export async function getStaticProps() {
  const allArticles = [
    {
      title: 'sample text',
      description: 'sample text',
      purpose_category: 'sample text',
      tag: 1,
    },
    {
      title: 'sample text2',
      description: 'sample text2',
      purpose_category: 'sample text2',
      tag: 2,
    },
  ]

  return {
    props: {
      allArticles,
    },
  }
}
