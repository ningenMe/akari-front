import HistoryContent from 'interfaces/HistoryContent'

interface HistoryInterface {
    readonly yearFrom :  number,
    readonly yearTo   :  number,
    readonly body     :  string,
    readonly contents :  ReadonlyArray<HistoryContent> 
    getBpdyWithPeriod() : string
}

export default class History implements HistoryInterface {
    readonly yearFrom :  number
    readonly yearTo   :  number
    readonly body     :  string
    readonly contents  :  ReadonlyArray<HistoryContent> 
    constructor(yearFrom : number, yearTo : number, body : string, contents : ReadonlyArray<HistoryContent>) {
        this.yearFrom = yearFrom
        this.yearTo = yearTo
        this.body = body
        this.contents = contents
    }
    getBpdyWithPeriod = () : string => {
        return this.yearFrom.toString() + "-" + this.yearTo.toString() + ": " + this.body
    }
}