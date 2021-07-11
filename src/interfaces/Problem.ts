import {OnlineJudgeType} from 'interfaces/OnlineJudgeType'

export interface Problem{
    readonly title : string,
    readonly type  : OnlineJudgeType
    readonly href  : string
}