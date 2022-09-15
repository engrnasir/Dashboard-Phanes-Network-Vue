<template>
  <div class="liquidityLocker">
    <div class="row">
        <div class="filterbar">
            <div class="searchbar">
                <input type="text" class="searchInput" placeholder="Pair name or address">
                <img src="@/assets/searchIcon-night.png" class="searchIcon" alt="" v-if="nightMode">
                <img src="@/assets/searchIcon.png" class="searchIcon" alt="" v-else>
            </div>
            <div class="sortButton">
                Sort By <img src="@/assets/sort-night.png" alt="">

            </div>
        </div>
    </div>

  </div>
</template>

<script>
    import { mapState } from 'vuex';
export default {
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
            img{
                width: 26px;
                margin-left: 17px;
            }
        }
    }


</style>