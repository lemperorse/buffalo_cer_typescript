import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import axios from '@/plugins/axios'
import {Core} from "@/store/core";
import {Geography, Province, Amphur, District} from '@/models/core'
import _ from 'lodash'
@Module({generateMutationSetters: true})
class CityClass extends VuexModule {

    public dialogCityState: boolean = false;

    public currentGeo: Geography | null = null
    public currentProvince: Province | null = null
    public currentAmphur: Amphur | null = null
    public currentDistrict: District | null = null
    public showName: string | null = null

    public city:any = {}

    public async getGeo(): Promise<any> {
        return await Core.getHttp('/api/geo/')
    }

    public async getProvince(geo: any): Promise<any> {
        return await Core.getHttp(`/api/province/?geo=${geo}`)
    }

    public async getAmphur(province: any): Promise<any> {
        return await Core.getHttp(`/api/amphur/?province=${province}`)
    }

    public async getDistrict(amphur: any): Promise<any> {
        return await Core.getHttp(`/api/district/?amphur=${amphur}`)
    }

    public async setShowName() {
        let province: any = this.currentProvince?.name
        let geo: any = this.currentGeo?.name
        let amphur: any = this.currentAmphur?.name
        let district: any = this.currentDistrict?.name
        this.showName = `${geo}  จ.${province} อ.${amphur} ต.${district}`
    }

    public async getFullCity(){
        this.city = {
            'geo': await Core.getHttp('/api/geo/'),
            'province': await Core.getHttp(`/api/province/`),
            'amphur': await Core.getHttp(`/api/province/`),
            'district': await Core.getHttp(`/api/district/`)
        }
    }

     


}

import store from "@/store"

export const City = new CityClass({store, name: "City"})
