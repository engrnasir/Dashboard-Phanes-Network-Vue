<script>
    import {mapMutations, mapState} from 'vuex'
    export default {
        data(){
            return{
                darkMode:false,
            }
        },
        computed:{
            ...mapState([
                'nightMode'
            ])
        },
        methods:{
            ...mapMutations([
                'changeMode'
            ]),
            handleDarkMode(){
            this.darkMode = !this.darkMode;
            this.changeMode(this.darkMode)
            const dot = document.getElementById('toggleDot')
            if(this.darkMode === true){
                dot.style.left = '23px'
                dot.style.background= 'rgba(7, 14, 12, 0.85)';
            }else{
                dot.style.left = '3px'
                dot.style.background= '#fff';
            }
            },
            setActive(){
                const buttons = document.querySelectorAll('.btn')
                for(let i=0; i<buttons.length; i++){
                    buttons[i].classList.remove('active')
                }
                const btn = event.target
                btn.classList.add('active')
                if(btn.classList.contains('btn1')){ this.$router.push('/')}
                else if(btn.classList.contains('btn2')){this.$router.push('/liquidityLocker')}
                else if(btn.classList.contains('btn3')){this.$router.push('/tokenLocker')}
                else if(btn.classList.contains('btn4')){this.$router.push('/tokenMinter')}
                else if(btn.classList.contains('btn5')){this.$router.push('/staking')}
            }
    
        },
        mounted(){
            this.darkMode = this.nightMode
        }
    }
</script>

<template>
  <nav class="nav" :class="nightMode?'nav-night':''">
    <img src="@/assets/Logo-night.png" alt="" class="logo" v-if="nightMode">
    <img src="@/assets/logo.png" alt="" class="logo" v-else>
    <ul class="buttons" :class="nightMode?'buttons-night':''">
        <li><router-link to="" @click="setActive" class="btn btn1">Index</router-link></li>
        <li><router-link to="" @click="setActive" class="btn btn2">Liquidity Locker</router-link></li>
        <li><router-link to="" @click="setActive" class="btn btn3">Token Locker</router-link></li>
        <li><router-link to="" @click="setActive" class="btn btn4">Token Minter</router-link></li>
        <li><router-link to="" @click="setActive" class="btn btn5">Staking</router-link></li>
    </ul>
    <div class="right">
        <img src="@/assets/dayIcon.png" alt="" class="toggleBtn" v-if="nightMode" @click="changeMode(!nightMode)">
        <img src="@/assets/nightIcon.png" alt="" class="toggleBtn" v-else @click="changeMode(!nightMode)">
        
        <button class="connect">Connect</button>
    </div>

  </nav>
</template>
<style lang="scss" scoped>
    .nav{
        width: 100%;
        background: linear-gradient(180deg, rgba(243, 243, 243, 0.132) 0%, rgba(243, 243, 243, 0.044) 100%);
        backdrop-filter: blur(20px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 24px;
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.01);
        @media only screen and (min-width:1600px){
            padding: 15px 100px;
        }
        @media only screen and (max-width:580px){
            padding: 15px 10px;
        }
        .logo{
            width: 130px;       
            @media only screen and (max-width:780px) {
                width: 70px;
            }     
            @media only screen and (max-width:580px) {
                width: 45px;
            } 
        }
        .buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            list-style: none;
            &>*:not(:last-child){
                margin-right: 40px;
                @media only screen and (max-width:1480px) {
                   margin-right: 15px;
                }
                @media only screen and (max-width:780px) {
                   margin-right: 10px;
                }
                @media only screen and (max-width:580px) {
                    margin-right: 0px;
                } 
            }
            .btn{
                font-weight: 500;
                font-size: 18px;
                padding: 10px 20px;
                border-radius: 7px;
                color: #070E0C;
                transition: all .25s;
                @media only screen and (max-width:780px) {
                    padding: 6px 14px;
                } 
                @media only screen and (max-width:580px) {
                    font-size: 16px;
                    padding: 6px 10px;
                }
                @media only screen and (max-width:400px) {
                    font-size: 14px;
                    padding: 6px;
                }
                &:active,&:hover{
                    background: rgba(9, 151, 110, 0.15);
                    color: #09976E;
                }
            }
            .active{
                background: rgba(9, 151, 110, 0.15);
                color: #09976E;
            }           
        }
        .buttons-night{
            .btn{
                color: #ADADAD;
                &:active,&:hover{
                    background: #1B201E;
                    color: #ADADAD;
                }
            }
            .active{
                background: #1B201E;
                color: #ADADAD;
            }
        }
        .right{
            display: flex;
            align-items: center;
            justify-content: center;
            .toggleBtn{
                width: 45px;
                height: 45px;
                padding: 10px;
                background: rgba(27, 209, 156, 0.15);
                border-radius: 7px;
                margin-right: 30px;             
                transition: all .25s;
                cursor: pointer;
                @media only screen and (max-width:580px) {
                    transform: scale(.8);
                    margin-right: 10px;
                } 
            }
            .connect{
                padding: 15px 27px;
                background: linear-gradient(95.34deg, #09976E -21.44%, #084F65 108.23%);
                color: #fff;
                border-radius: 8px;
                font-weight: 700;
                font-size: 20px;
                border: none;
                outline: none;
                cursor: pointer;
                transition: all .25s;
                @media only screen and (max-width:780px) {
                    padding: 10px 20px;
                    font-weight: 700;
                    font-size: 20px;
                }
                @media only screen and (max-width:580px) {
                    padding: 5px 10px;
                    font-weight: 600;
                    font-size: 14px;
                } 
                @media only screen and (max-width:400px) {
                    padding: 5px 8px;
                    font-weight: 500;
                    font-size: 12px;
                }
                &:active,&:hover{
                    background:  #09976E;
                }
            }

        }
    }
    .nav-night{
        background: rgba(10, 14, 11, 0.999);
        backdrop-filter: blur(20px);
    }

</style>