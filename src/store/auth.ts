import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import {Core} from "@/store/core";
import axios from '@/plugins/axios'
import {User} from "@/models/user";

@Module({generateMutationSetters: true})
class AuthClass extends VuexModule {
    //state
    public Hi: String | null = null;
    private  token:any =  localStorage.getItem('token')
    public user :User | null = null

    public async  setUser(id:number){
        this.user = await Core.getHttp(`/api/account/${id}/`)
    }
    public async register(from:any,fromProfile:any,location:any): Promise<any> {
        let user:any  = await Core.postHttp('/api/register',from)
        if(user.id){
           // alert(user.id)
            fromProfile.user = user?.id
            await this.autoCreateProfile(fromProfile)
            await this.autoCreateFarm(user?.first_name,user?.id,location)
            return user;
        }
        return user
    }

    public async autoCreateProfile(from:any): Promise<any>{
        return Core.postHttp('/api/profile/create/',from)
    }

    private async autoCreateFarm(name:string,user:number,location:any): Promise<any>{
        
        return Core.postHttp('/api/buffalo/farm/create/', {
            "user_id":user,
            "name":name,
            "location":(location)?location:'19.0290389,99.8906438'
        })
    }

    public async registerAdmin(from:any ): Promise<any> {
        let user:any  = await Core.postHttp('/api/register',from)
        if(user.id){
            await this.autoAddAdmin(user?.id)
        }
        return user
    }
    private async autoAddAdmin(user:number){
        return Core.postHttp('/api/changeAdmin/', {
            "user":user,
        })
    }



    public async removeToken(){
        axios.defaults.headers.common['Authorization'] ='';
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
            return true;
        }else{
            return false;
        }
    }

    async logout(){
        localStorage.clear();
        return await Core.postHttp('/api/rest-auth/logout/',{})
    }
}

import store from "@/store"

export const Auth = new AuthClass({store, name: "Auth"})
