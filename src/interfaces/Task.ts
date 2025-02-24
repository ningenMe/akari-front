import {OnlineJudgeType} from 'interfaces/OnlineJudgeType'

export interface Task {
  readonly date  : string
  readonly title : string,
  readonly type  : OnlineJudgeType
  readonly href  : string
}
