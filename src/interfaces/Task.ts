import {OnlineJudgeType} from 'interfaces/OnlineJudgeType'

export interface Task {
  readonly title : string,
  readonly type  : OnlineJudgeType
  readonly href  : string
}
