import {OnlineJudgeType} from 'interfaces/OnlineJudgeType'

export const onlineJudgeIconPath = (onlineJudgeType:OnlineJudgeType) :string => {
    if (onlineJudgeType === "YUKICODER") return "yukicoder.jpg";
    if (onlineJudgeType === "AOJ") return "aoj.jpeg";
    if (onlineJudgeType === "HACKER_RANK") return "hackerrank.png";
    return "ningenme.png";
}