<script>
    import {mapMutations, mapState} from 'vuex'
    export default {
        data(){
            return{
                darkMode:false,
                hideMenu: true,
            }
        },
        computed:{
            ...mapState([
                'nightMode'
            ]),
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
                
                if(btn.classList.contains('btn1')){                     
                    this.$router.push('/dashboard')
                }
                else if(btn.classList.contains('btn2')){this.$router.push('/liquidityLocker')}
                else if(btn.classList.contains('btn3')){this.$router.push('/tokenLocker')}
                else if(btn.classList.contains('btn4')){this.$router.push('/tokenMinter')}
                else if(btn.classList.contains('btn5')){this.$router.push('/staking')}
                else if(btn.classList.contains('btn6')){this.$router.push('/multisender')}
                this.hideMenu = !this.hideMenu
            }
    
        },
        mounted(){
            this.darkMode = this.nightMode
        }
    }
</script>

<template>
    <div class="wrapper" :class="nightMode?'nav-night':''">
        <nav class="nav">
          <img src="@/assets/Logo-night.png" alt="" class="logo" v-if="nightMode" @click="$router.push('/')">  
          <img src="@/assets/logo.png" alt="" class="logo" v-else @click="$router.push('/')">
          <div>
              <ul class="buttons" :class="nightMode?'buttons-night':''">
                  <li><router-link to="" @click="setActive" class="btn btn1">Index</router-link></li>
                  <li><router-link to="" @click="setActive" class="btn btn2">Liquidity Locker</router-link></li>
                  <li><router-link to="" @click="setActive" class="btn btn3">Token Locker</router-link></li>
                  <li><router-link to="" @click="setActive" class="btn btn4">Token Minter</router-link></li>
                  <li><router-link to="" @click="setActive" class="btn btn5">Staking</router-link></li>
                  <li><router-link to="" @click="setActive" class="btn btn6">Multisender</router-link></li>
              </ul>
          </div>
          <div class="right">
              <img src="@/assets/menu.png" alt="" class="menuIcon" @click="hideMenu = !hideMenu">
              <img src="@/assets/dayIcon.png" alt="" class="toggleBtn" v-if="nightMode" @click="changeMode(!nightMode)">
              <img src="@/assets/nightIcon.png" alt="" class="toggleBtn" v-else @click="changeMode(!nightMode)">
              
              <button class="connect">Connect</button>
          </div>
      
        </nav>
        <button class="selectNetwork">Select Network</button>
        <div :class="hideMenu? 'hideButtons':''">
            <ul class="buttons-mobile" :class="nightMode?'buttons-mobile-night':''">
                <li><router-link to="" @click="setActive" class="btn btn1">Index</router-link></li>
                <li><router-link to="" @click="setActive" class="btn btn2">Liquidity Locker</router-link></li>
                <li><router-link to="" @click="setActive" class="btn btn3">Token Locker</router-link></li>
                <li><router-link to="" @click="setActive" class="btn btn4">Token Minter</router-link></li>
                <li><router-link to="" @click="setActive" class="btn btn5">Staking</router-link></li>
                <li><router-link to="" @click="setActive" class="btn btn6">Multisender</router-link></li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        padding: 15px 24px;
        background: linear-gradient(180deg, rgba(243, 243, 243, 0.132) 0%, rgba(243, 243, 243, 0.044) 100%);
        backdrop-filter: blur(20px);
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.01);
        @media only screen and (min-width:1600px){
            padding: 15px 100px;
        }
        @media only screen and (max-width:580px){
            padding: 15px 10px;
        }
    }
    .nav{
        position: relative;
        z-index: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .logo{
            cursor: pointer;
            width: 130px;       
            @media only screen and (max-width:1080px) {
                width: 100px;
            }     
               
        }
        .buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            list-style: none;
            @media only screen and (max-width:980px){
                display: none;
            }
            &>*:not(:last-child){
                margin-right: 40px;
                @media only screen and (max-width:1480px) {
                   margin-right: 2px;
                }
            }
            .btn{
                font-weight: 500;
                font-size: 18px;
                padding: 10px 20px;
                border-radius: 7px;
                color: #070E0C;
                transition: all .25s;

                @media only screen and (max-width:1340px) {
                    padding: 10px;
                }
                @media only screen and (max-width:1130px) {
                    font-size: 16px;
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
            @media only screen and (max-width:980px) {
                background: rgba(10, 14, 11, 0.999);
            }
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
            .menuIcon{
                width: 30px;
                margin-right: 15px;
                cursor: pointer;
                display: none;
                @media only screen and (max-width:980px) {
                    display: block;
                }
                @media only screen and (max-width:580px) {
                    width: 20px;
                }
            }
            .toggleBtn{
                width: 45px;
                height: 45px;
                padding: 10px;
                background: rgba(27, 209, 156, 0.15);
                border-radius: 7px;
                margin-right: 30px;             
                transition: all .25s;
                cursor: pointer;
                @media only screen and (max-width:1080px) {
                    width: 30px;
                    height: 30px;
                    padding: 5px;
                    margin-right: 15px; 
                }
                @media only screen and (max-width:580px) {
                    transform: scale(.8);
                    margin-right: 10px;
                } 
            }
            .connect{
                padding: 10px 27px;
                background: linear-gradient(95.34deg, #09976E -21.44%, #084F65 108.23%);
                color: #fff;
                border-radius: 8px;
                font-weight: 700;
                font-size: 20px;
                border: none;
                outline: none;
                cursor: pointer;
                transition: all .25s;
                @media only screen and (max-width:1080px) {
                    padding: 10px 20px;
                    font-weight: 500;
                    font-size: 16px;
                }
                @media only screen and (max-width:980px) {
                    padding: 10px 27px;
                    width: 134px;
                    font-size: 15px;
                } 
                @media only screen and (max-width:420px) {
                    width: 100px;
                    padding: 10px 5px;
                    font-size: 14px;
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

    .selectNetwork{
        align-self: flex-end;
        width: 134px;
        padding: 10px;
        background: linear-gradient(95.34deg, #09976E -21.44%, #084F65 108.23%);
        color: #fff;
        border-radius: 8px;
        font-weight: 700;
        font-size: 15px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all .25s;
        @media only screen and (max-width:1080px) {
            width: 100px;
        }
        @media only screen and (max-width:980px) {
            width: 134px;
            font-size: 15px;
        } 
        @media only screen and (max-width:420px) {
            width: 100px;
            padding: 10px 5px;
            font-size: 12px;
        } 
        &:active,&:hover{
            background:  #09976E;
        }
    }
    .buttons-mobile{
        display: none;
        list-style: none;
        width: 100%;
        z-index: 999;
        color: #1B201E;
        padding: 15px;
        li{
            width: 100%;
        }

        .btn{
            font-weight: 500;
            font-size: 18px;
            padding: 10px 20px;
            border-radius: 7px;
            color: #070E0C;
            transition: all .25s;

            display: inline-block;
            min-width: 100%;
            border-radius: 0px;
            margin-right: 0px;
        }
        .active{
            background: rgba(9, 151, 110, 0.15);
            color: #09976E;
        }           

        @media only screen and (max-width:980px){
            display: block;
        }
    }
    .buttons-mobile-night{
        color: #ffffff;
        .btn{
            color: #ffffff;
        }
    }
    .hideButtons{
        display: block;
        @media only screen and (max-width:980px){
            display: none;
        }
    }

</style>