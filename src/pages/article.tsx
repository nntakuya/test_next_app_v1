import Article from '../components/Article'
import SearchBox from '../components/SearchBox'

export default function ArticleList({ allArticles }) {
  return (
    <>
      <SearchBox />
      <div>
        {allArticles.map((article: Array, index: number) => {
          return (
            <Article
              key={index}
              title={article.title}
              description={article.description}
              purpose_category={article.purpose_category}
              tag={article.tag}
            />
          )
        })}
      </div>
    </>
  )
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
