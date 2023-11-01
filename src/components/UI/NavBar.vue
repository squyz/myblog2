<template>
    <div class="navbar wrapper" ref="navbar">
        <div class="navbar-content">
            <img src="@/img/logo.png" alt="" class="img-logo" @click="$router.push('/')">
            <div class="nav-links">
                <span class="nav-link" @click="$router.push('/')">Главная</span>
                <span class="nav-link" @click="$router.push('/about')">Об авторе</span>
                <span class="nav-link">Проекты</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            scrollBar(bool, y){
                console.log(y)
            }
        },
        mounted(){
            window.addEventListener('scroll', ()=>{
                if(window.scrollY > 90){
                    this.$refs.navbar.classList.add('active')
                }
                else{
                    this.$refs.navbar.classList.remove('active')
                }
            })
        },
        name: 'nav-bar'
    }
</script>

<style scoped>
.navbar{
    top: 0;
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 96px;
    transition: all .3s ease-in;
    box-shadow: 0 0 15px none;
}
.active{
    background-color: black;
    box-shadow: 0 0 15px black;
}
.navbar-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.img-logo{
    width: 96px;
}
.img-logo:hover{
    cursor: pointer;
}
.nav-links{
    display: flex;
    gap: 20px;
}
.nav-link{
    color: white;
}
.nav-link:hover{
    color: #dcdcdc;
    cursor: pointer;
}

@media screen and (width < 500px){
    .img-logo{
        display: none;
    }
    .navbar-content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-links{
        display: inline-flex;
    }
    .nav-link{
        display: block;
    }
    .wrapper{
        padding: 0;
    }
}
</style>