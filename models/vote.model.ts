import { Schema, Types, model, models } from 'mongoose';

export interface IVote {
    author: Types.ObjectId;
    targetId: Types.ObjectId;
    type: 'Question' | 'Answer';
    voteType: 'upvote' | 'downvote';
}
    
const VoteSchema = new Schema<IVote>({
    author: { type: Schema.Types.ObjectId, ref: "User", require: true },
    targetId: { type: Schema.Types.ObjectId,ref: "Answer", require: true },
    type: { type: String,enum: ["Question", "Answer"], require: true },
    voteType: { type: String, enum: ['upvote', 'downvote'], require: true },
}, { timestamps: true })

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;