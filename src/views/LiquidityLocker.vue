<template>
  <div class="liquidityLocker" :class="nightMode? 'liquidityLocker-night':''">
    <div class="row">
        <div class="filterbar" :class="nightMode? 'filterbar-night':''">
            <div class="searchbar">
                <input type="text" class="searchInput" placeholder="Pair name or address">
                <img src="@/assets/searchIcon-night.png" class="searchIcon" alt="" v-if="nightMode">
                <img src="@/assets/searchIcon.png" class="searchIcon" alt="" v-else>
            </div>
            <div class="sortWrapper" :class="nightMode? 'sortWrapper-night':''">
                <div class="sortButton" @click="showSortPopup=!showSortPopup">
                    Sort By <img src="@/assets/sort-night.png" alt="">
                </div>
                <ul class="sortPopup" :class="showSortPopup? '':'hideSortPopup'">
                    <li class="sortItem">APR</li>
                    <li class="sortItem">Next In</li>
                    <li class="sortItem">Amount</li>
                </ul>
            </div>
        </div>
        <ul class="cards">
            <li class="card" v-for="(card, index) in cards" :key="index" :class="nightMode? 'card-night':''">
                <div class="card-heading">
                    <div class="icons">
                        <img :src="require(`@/assets/${card.icon1}`)" alt="" class="icon1">
                        <img :src="require(`@/assets/${card.icon2}`)" alt="" class="icon2">
                    </div>
                   <div class="title">
                        <h3 class="title1">{{card.title1}}</h3>
                        <h3 class="title2">/{{card.title2}}</h3>
                   </div>
                </div>
                <div class="col">
                    <h3 class="title">APR</h3>
                    <p class="value">{{card.apr}}%</p>
                </div>
                <div class="col">
                    <h3 class="title">next in</h3>
                    <p class="value">{{card.nextIn}}</p>
                </div>
                <div class="col">
                    <h3 class="title">amount</h3>
                    <p class="value">{{card.amount}}</p>
                </div>
                <div class="col">
                    <h3 class="title">liquidity</h3>
                    <p class="value liquidityVal">{{card.liquidity}}</p>
                </div>
                <div class="lockBtn">
                      <img src="@/assets/lockIcon.png" alt="" class="lockIcon">
                      Lock
                  </div>
            </li>
        </ul>
    </div>

  </div>
</template>

<script>
    import { mapState } from 'vuex';
export default {
    data(){
        return{
            showSortPopup:false,
            cards:[
                { icon1:'tera.png', icon2:'eth-icon.png', title1:'tera', title2:'eth', apr:99.9, nextIn:'6 Months', amount:38.72, liquidity:'6.23 M', },
                { icon1:'tera.png', icon2:'eth-icon.png', title1:'tera', title2:'eth', apr:99.9, nextIn:'6 Months', amount:38.72, liquidity:'6.23 M', },
                { icon1:'tera.png', icon2:'eth-icon.png', title1:'tera', title2:'eth', apr:99.9, nextIn:'6 Months', amount:38.72, liquidity:'6.23 M', },
                { icon1:'tera.png', icon2:'eth-icon.png', title1:'tera', title2:'eth', apr:99.9, nextIn:'6 Months', amount:38.72, liquidity:'6.23 M', },
                { icon1:'tera.png', icon2:'eth-icon.png', title1:'tera', title2:'eth', apr:99.9, nextIn:'6 Months', amount:38.72, liquidity:'6.23 M', },
                { icon1:'tera.png', icon2:'eth-icon.png', title1:'tera', title2:'eth', apr:99.9, nextIn:'6 Months', amount:38.72, liquidity:'6.23 M', },
            ]

        }
    },
    computed:{
            ...mapState([
                'nightMode'
            ])
        },
}
</script>

<style lang="scss" scoped>
    .liquidityLocker{
        padding: 70px 0;
    }
    .liquidityLocker-night{
        background: #070E0C;
        backdrop-filter: blur(20px);
    }

    .filterbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .searchbar{
            position: relative;
            width: 483px;
            height: 42px;
            border: 1px solid #CBCBCB;
            border-radius: 60px;
            @media only screen and (max-width:980px){
                width: 283px;
                height: 32px;
                margin-right: 15px;
            }
            .searchInput{
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                background: transparent;
                font-style: italic;
                font-weight: 500;
                font-size: 18px;
                color: #646464;
                padding: 0 30px;
                padding-right: 60px;
                @media only screen and (max-width:980px){
                    font-size: 14px;
                    padding: 0 15px;
                }
                &:focus{
                        border: 1px solid #1BD19C;
                        border-radius: 60px;
                }
            }
            .searchIcon{
                position: absolute;
                right: 30px;
                top: 11.5px;
                width: 19px;
                @media only screen and (max-width:980px){
                    right: 15px;
                    width: 15px;
                    top: 8px;
                    right: 10px;
                }
            }
        }
        .sortWrapper{
            position: relative;
            .sortPopup{
                opacity: 1;
                width: 100%;
                position: absolute;
                top: 50px;
                z-index: 999;
                background-color: #fff;
                list-style: none;
                padding: 25px 0px;
                border-radius: 20px;
                color: #09976E;
                border: 1px solid #09976E;
                transition: all .2s;
                .sortItem{
                    padding: 0 30px;
                    font-weight: 600;
                    &:hover{
                        cursor: pointer;
                        background: rgb(134, 134, 134);
                        color: #1BD19C;
                    }
                }
              }
              .hideSortPopup{
                opacity: 0;
                z-index: -2;
              }
          }
          .sortWrapper-night{
            .sortPopup{
                background: #2a302e;
            }
        }
        .sortButton{
            width: 166px;
            height: 42px;
            border: 1px solid #070E0C;
            border-radius: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 18px;
            color: #070E0C;
            cursor: pointer;
            @media only screen and (max-width:980px){
                width: 120px;
                height: 30px;
                font-size: 14px;
            }
            img{
                width: 26px;
                margin-left: 17px;
                @media only screen and (max-width:980px){
                    width: 16px;
                    margin-left: 10px;
                }
            }
        }
    }
    .filterbar-night{
        .sortButton{
            border: 1px solid #C5C5C5;
            color: #C5C5C5;           
        }
      
    }
    .cards{
        padding: 40px 0;
        .card{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 42px 38px;
            background: linear-gradient(95.34deg, rgba(9, 151, 110, 0.1) -21.44%, rgba(8, 79, 101, 0.1) 108.23%);
            border-radius: 8px;
            margin-bottom: 40px;
            
            @media only screen and (max-width:980px){
                flex-direction: column;
                align-items: flex-start;
            }
            &>*{
                margin-bottom: 10px;
            }

            .card-heading{
                display: flex;
                .icons{
                    margin-right: 8px;
                    img{
                        height: 40px;
                        width: 40px;
                        padding: 8px;
                        border-radius: 50%;
                    }
                    .icon1{
                        background-color: #172852;
                        transform: translateX(8px);
                    }
                    .icon2{
                        background-color: #ACB5F0;
                    }
                }
                .title{
                    text-transform: capitalize;
                    display: flex;
                    align-items: center;
                    .title1{
                        color: #010D09;
                    }
                    .title2{
                        color: #585858;
                    }
                }
            }
            .col{
                @media only screen and (max-width:980px){
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .title{
                    font-weight: 500;
                    font-size: 20px;
                    color: #505050;
                    margin-bottom: 10px;
                    text-transform: capitalize;
                    @media only screen and (max-width:980px){
                        margin-bottom: 0;
                    }
                }
                .value{
                    font-weight: 500;
                    font-size: 20px;
                    color: #010D09;
                }
                .liquidityVal{
                    font-weight: 700;
                    color: #09976E;
                }
            }
            .lockBtn{
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-weight: 700;
                font-size: 18px;
                width: 134px;
                height: 46px;
                background: linear-gradient(95.34deg, #09976E -21.44%, #084F65 108.23%);
                border-radius: 8px;
                transition: all .25s;
                cursor: pointer;
                &:active,&:hover{
                    background:#09976E;
                }
                img{
                    width: 16px;
                    margin-right: 15px;
                }
            }
        }
        .card-night{
            background: linear-gradient(95.34deg, rgba(9, 151, 110, 0.1) -21.44%, rgba(8, 79, 101, 0.1) 108.23%);
            .card-heading{
                .title{
                    .title1{
                        color: #E0E0E0;
                    }
                    .title2{
                        color: #9D9D9D;
                    }
                }
            }
            .col{
                .title{
                    color: #A5A5A5;
                }
                .value{
                    color: #ffffff;
                }
                .liquidityVal{
                    font-weight: 700;
                    color: #09976E;
                }
            }
        }
    }


</style>