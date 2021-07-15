import {BlogType} from 'interfaces/BlogType'

export interface Blog{
    readonly url   :  string,
    readonly type  :  BlogType,
    readonly date  :  string,
    readonly title :  string,
    readonly liked :  number
}

export interface DiaryWithAround{
    readonly prev : Blog|null,
    readonly curr : Blog,
    readonly next : Blog|null,
}