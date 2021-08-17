import {BlogType} from 'interfaces/BlogType'

export const blogIconPath = (blogType:BlogType) :string => {
    if (blogType === "HATENA") return "hatena.svg";
    if (blogType === "QIITA") return "qiita.png";
    if (blogType === "AMEBA") return "ningenme.png";
    if (blogType === "DIARY") return "dokata.png";
    return "ningenme.png";
}