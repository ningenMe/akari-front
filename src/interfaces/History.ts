import { HistoryContent } from 'interfaces/HistoryContent'

export interface History {
  readonly yearFrom: string,
  readonly yearTo: string,
  readonly body: string,
  readonly contentList: ReadonlyArray<HistoryContent>
}
