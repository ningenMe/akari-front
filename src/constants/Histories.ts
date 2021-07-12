import {History} from 'interfaces/History'
import {HistoryContent} from 'interfaces/HistoryContent'

const yahooContents : ReadonlyArray<HistoryContent> = [
    {body:"ヤフーショッピング 商品レビュー バックエンド開発",href:null}
]

const ouContents : ReadonlyArray<HistoryContent> = [
    {body:"J. Phys. D: Appl. Phys. 53, 094001(2019)",href:"https://iopscience.iop.org/article/10.1088/1361-6463/ab5a27/meta"},
    {body:"Jpn.J.Appl.Phys. 58, 070901(2019)",       href:"https://iopscience.iop.org/article/10.7567/1347-4065/ab2406/meta"},
    {body:"Phys.Rev.Appl. 10, 034063(2018)",         href:"https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.10.034063"}
]

export const histories : ReadonlyArray<History> = [
    {yearFrom:"2021",yearTo:"20xx",body:"Software Engineer",contents:[]},
    {yearFrom:"2019",yearTo:"2021",body:"Yahoo! Japan Software Engineer",contents: yahooContents},
    {yearFrom:"2017",yearTo:"2019",body:"大阪大学大学院　基礎工学研究科",contents: ouContents},
    {yearFrom:"2013",yearTo:"2017",body:"大阪大学　基礎工学部",contents:[]},
]
