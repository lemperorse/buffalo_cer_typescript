import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import {Core} from "@/store/core";

@Module({generateMutationSetters: true})
class UserClass extends VuexModule {
    public user:object | null = null
    public permission :object|null = null
    public routeUser : string = '/'
    public profile:object | null = null

    public async autoCreateProfile(from:any): Promise<any>{
        return Core.postHttp('/api/profile/create/',from)
    }

    public async getUser(){
        return await Core.getHttp('/api/rest-auth/user/')
    }

    public async getProfile(userId:number){
        return await Core.getHttp(`/user/account/myprofile/${userId}/`)
    }

    public async loadUser(){
        let user = await this.getUser();
        if(user.pk){
            let permission = await Core.getHttp(`/api/account/${user.pk}/`)
            let profile = await this.getProfile(user.pk)
            this.user =  Object.assign({}, user, profile,permission,{user_id:user.pk,profile_id:profile.id});   
            this.permission = permission.is_staff
            this.routeUser = (permission.is_staff)?'/admin/home':'/user/home'
            return true;
        }else{
            return false;
        }
    }

    public async setUser(){
        let user = await this.getUser();
        let profile = await this.getProfile(user.pk)
        let permission = await Core.getHttp(`/api/account/${user.pk}/`)
        this.user =  Object.assign({}, user, profile,permission,{user_id:user.pk,profile_id:profile.id});   
    }



}

import store from "@/store"

export const User = new UserClass({store, name: "User"})
