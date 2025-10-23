import categories from './categories'
import posts from './posts'
import tags from './tags'
import pages from './pages'
const cms = {
    categories: Object.assign(categories, categories),
posts: Object.assign(posts, posts),
tags: Object.assign(tags, tags),
pages: Object.assign(pages, pages),
}

export default cms