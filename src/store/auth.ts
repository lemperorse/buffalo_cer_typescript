import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import {Core} from "@/store/core";

@Module({generateMutationSetters: true})
class AuthClass extends VuexModule {
    //state
    private token: string | null = null;
    public Hi: String | null = null;

    public async register(from:any,fromProfile:any): Promise<any> {
        let user:any  = await Core.postHttp('/api/register',from)
        if(user.id){
            fromProfile.user = user?.id
            await this.autoCreateProfile(fromProfile)
            await this.autoCreateFarm(user?.first_name,user?.id)
        }
    }

    public async autoCreateProfile(from:any): Promise<any>{
        return Core.postHttp('/api/profile/create/',from)
    }

    private async autoCreateFarm(name:string,user:number): Promise<any>{
        return Core.postHttp('/api/buffalo/farm/create/', {
            "user_id":user,
            "name":name
        })
    }

    @Action
    async login() {
        alert('hello login');

    }

    @Action
    async logout(): Promise<void> {

        alert('hello');
    }
}

import store from "@/store"

export const Auth = new AuthClass({store, name: "Auth"})
