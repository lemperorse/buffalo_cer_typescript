import Vue from 'vue'
import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import { vm } from '@/main'
import Swal from 'sweetalert2'

@Module({generateMutationSetters: true})
class AppModule extends VuexModule {
    //state
    private token: string | null = null;
    public Hi:String | null = null;
    public loading :any = null;


    async onLoad(){
        this.loading = Vue.$loading.show()
    }
    async offLoad(){
        this.loading.hide()
    }

    async confirm(head:string,txt:string){
       return await Swal.fire({
            title: head,
            text: txt,
           imageUrl: 'https://sv1.picz.in.th/images/2020/11/17/bVtGvn.png',
            imageWidth: 150,
            imageHeight: 150,
            confirmButtonText: '<span class="mdi mdi-check-circle"></span>\nยืนยัน' ,
            showCancelButton: true,
            cancelButtonText:"ยกเลิก"
        }).then((r)=>{return (r.value)?true:false})
    }

    async success(txt:string){
        return await Swal.fire({
            title: 'สำเร็จแล้ว',
            text: txt,
            imageUrl: 'https://sv1.picz.in.th/images/2020/11/17/bVteqW.png',
            imageWidth: 150,
            imageHeight: 150,
            confirmButtonText: '<span class="mdi mdi-check-circle"></span>\nตกลง' ,
        })
    }

    async error(txt:string){
        return await Swal.fire({
            title: 'ผิดพลาด',
            text: txt,
            imageUrl: 'https://sv1.picz.in.th/images/2020/11/17/bVtLBg.png',
            imageWidth: 150,
            imageHeight: 150,
            confirmButtonText: '<span class="mdi mdi-check-circle"></span>\nตกลง' ,
        })
    }






}

import store from "@/store"
export const App = new AppModule({store, name: "App"})
