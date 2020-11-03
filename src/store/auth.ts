import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import {Core} from "@/store/core";
import axios from '@/plugins/axios'

@Module({generateMutationSetters: true})
class AuthClass extends VuexModule {
    //state
    public Hi: String | null = null;
    private  token:any =  localStorage.getItem('token')

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

    public async storeToken(token:any){
        axios.defaults.headers.common['Authorization'] = (token != null )?`Token ${token}`:'';
    }

    public async storeTokenToStorage(token:any){
        localStorage.setItem('token',token )
    }

    public async checkToken(){
        if(this.token != null){
            await this.storeToken(this.token);
        }
    }

    async logout(){
        localStorage.clear();
        return await Core.postHttp('/api/rest-auth/logout/',{})
    }
}

import store from "@/store"

export const Auth = new AuthClass({store, name: "Auth"})
