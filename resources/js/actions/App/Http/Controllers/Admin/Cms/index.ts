import CategoryController from './CategoryController'
import PostController from './PostController'
import TagController from './TagController'
import PageController from './PageController'
const Cms = {
    CategoryController: Object.assign(CategoryController, CategoryController),
PostController: Object.assign(PostController, PostController),
TagController: Object.assign(TagController, TagController),
PageController: Object.assign(PageController, PageController),
}

export default Cms