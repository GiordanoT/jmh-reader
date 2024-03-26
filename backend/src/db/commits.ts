import {Schema, model} from 'mongoose';

export class Commits {
    protected static Schema = new Schema({
        id: {type: String},
        comment: {type: String},
        benchmark: {type: String},
        mode: {type: String},
        threads: {type: Number},
        iterations: {type: Number},
        forks: {type: Number},
        jdk: {type: String},
        unit: {type: String},
        score: {type: [Number]},
        data: {type: [[[Number]]]}
    });

    protected static Model = model(this.name.slice(0, -1), this.Schema);
    static keys = this.Schema.paths;

    static getAll = () => this.Model.find();
    static create = (values: Record<string, unknown>) => new this.Model(values).save().then(entity => entity.toObject());
    static delete = (id: string) => this.Model.findOneAndDelete({id});
}
