"use strict";
/**
 * import { ScrumteamBean } from "../Beans/ScrumTeamBean";
import ScrumTeamModel from "../Models/ScrumTeamModel";

export class ScrumTeamService {

    public async save(scrumTeam: ScrumteamBean): Promise<any> {
        var scrumTeamDao = new ScrumTeamModel(scrumTeam);
        await scrumTeamDao.save();
        return scrumTeamDao.toJSON();
    }

    public async update(scrumTeam: ScrumteamBean): Promise<any> {
        return await this.save(scrumTeam);
    }

    public async getAll(): Promise<any[]> {
        return JSON.parse((await ScrumTeamModel.find().lean().exec()).toString());
       }

    public async getOne(clave: string): Promise<any> {
        return await ScrumTeamModel.findOne({ _clave: clave }).exec().then(d=>d?.toJSON());
    }

    public async deleteOne(clave: string): Promise<any> {
        return await ScrumTeamModel.deleteOne({ _clave: clave }).lean().exec().then(d=>d?.toJSON());
    }
}
 */ 
