import Link from 'interfaces/Link'

const ningenMeNet     : Link = {url:"https://ningenme.net"                   , name:"ningenMe.net"}
const betaNingenMeNet : Link = {url:"https://beta.ningenme.net"              , name:"ningenMe.net"}
const github          : Link = {url:"https://github.com/ningenMe"            , name:"GitHub"}
const twitter         : Link = {url:"https://twitter.com/ningenMe"           , name:"@ningenMe"}
const atcoder         : Link = {url:"https://atcoder.jp/users/ningenMe"      , name:"AtCoder"}
const codeforces      : Link = {url:"https://codeforces.com/profile/ningenMe", name:"Codeforces"}
const yukicoder       : Link = {url:"https://yukicoder.me/users/4145"        , name:"yukicoder"}
const csacademy       : Link = {url:"https://csacademy.com/user/ningenMe"    , name:"CSAcademy"}
const hatena          : Link = {url:"https://ningenme.hatenablog.com/archive", name:"Hatena"}
const ameba           : Link = {url:"https://profile.ameba.jp/ameba/ningenme", name:"Ameba"}
const qiita           : Link = {url:"https://qiita.com/ningenMe"             , name:"Qiita"}

const compros : Link[] = [atcoder,codeforces,yukicoder,csacademy]
const blogs   : Link[] = [hatena,ameba,qiita]

export const Links = {
    ningenMeNet,
    betaNingenMeNet,
    github,
    twitter,
    compros,
    blogs
}   
export default Links 