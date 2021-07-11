import {BlogType} from 'interfaces/BlogType'

export default interface Blog{
    readonly url   :  string,
    readonly type  :  BlogType,
    readonly date  :  string,
    readonly title :  string
}