<template>
    <header>    
        <div class="header wrapper" v-scroll="setHeaderSpan">
            <h1 :class="{active: headerSpan}" class="header-head">Добро пожаловать на мой блог!</h1>
            <span :class="{active: headerSpan}" class="header-text">Год назад я заинтересовался программированием, и сейчас я написал этот сайт. Здесь моя история, методы обучения и достижения. Заинтересовал?</span>
        </div>
    </header>

    <main>
        <div class="history">
            <span class="history-note">*Примечание: до этого, я изучил python и java - языки, которые мне совершенно не пригодились</span>
            <div class="history-content wrapper" v-scroll="setHistorySpan">
                <h1 align="center">История</h1>
                <div class="history-blocks">
                    <div class="history-block history-block-left" :class="{active: historySpan}">
                        <span class="history-block-header">Начало: html, css</span>
                        <span class="history-block-text">Заинтерсовавшись созданием сайтов, я приступил к изучению html, позже (через неедлю) - css. К слову, в курсе, который я смотрел не было информации про flex, grid - что являлось большим минусом в моем развитии.</span>
                    </div>    
                    <div class="history-block history-block-right" :class="{active: historySpan}">
                        <span class="history-block-header">Логика: js</span>
                        <span class="history-block-text">Не набравшись достаточного опыта в верстке, я сразу перешел к javaScript. Однако, js дался мне легко, алгоритмы на базовом уровне были уже в первую неделю.</span>
                    </div>  
                    <div class="history-block history-block-left" :class="{active: historySpan}">
                        <span class="history-block-header">backend?</span>
                        <span class="history-block-text">Все это время я был заинтересован в backend-сфере. Мне хотелось создать свой сайт блог. В выборе я был не критичен, поэтому выбрал первый попавшийся язык - php, быстро изучив его, перешел к mysql. Итог: система авторизации.</span>
                    </div>
                    <div class="history-block history-block-right" :class="{active: historySpan}">
                        <span class="history-block-header">Дополнения: jquery, scss</span>
                        <span class="history-block-text">Один из самых важных моментов - выбор фрэймворка. В тот момент я работал в паре с однокурсником, тогда и появилась необходимость учить jquery и scss.</span>
                    </div>           
                </div>
            </div>
        </div>
        <div class="ways wrapper-mini" v-scroll="setWaysSpan">
            <h1>Методы обучения</h1>
            <div class="ways-blocks">
                <div class="ways-block ways-block-left" :class="{active: waysSpan}">
                    <div class="ways-block-number">1</div>
                    <span class="ways-block-text">Курсы с ютуба. Может быть и не самая качественная информация, но для базового понимания о веб-программировании - отлично.</span>
                </div>
                <div class="ways-block ways-block-bottom" :class="{active: waysSpan}">
                    <div class="ways-block-number">2</div>
                    <span class="ways-block-text">Бесплатные курсы "Код будущего". На ютубе хорошая теория, однако, умение писать чистый код развивается именно на интенсивах, стримах по разработке проетов.</span>
                </div>
                <div class="ways-block ways-block-right" :class="{active: waysSpan}">
                    <div class="ways-block-number">3</div>
                    <span class="ways-block-text">Последние - изготовление проектов. Этим методом пользуюсь я прямо сейчас, во время создании этого сайта. Пет-проектов много: калькулятор, слайдер, верстка сложных страниц.</span>
                </div>
            </div>
        </div>
        <div class="about wrapper">
            <div class="about-text">
                <h1 class="about-header">Подробнее обо мне</h1>
                <span class="about-span">Кто я? Как создавался этот сайт? Что будет дальше?</span>
            </div>
            <iframe src="https://www.youtube.com/embed/4tMySWvQeFo?si=bZjU1ix_iT25Bvb3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </main>
    <footer>
        <div class="footer wrapper">
            <div class="footer-content">

            </div>
            <div class="footer-contacts">
                <a href="https://vk.com/xdxdxdxdxdxdxddddd">
                    <img src="@/img/vk.png">
                </a>
                <a href="#">
                    <img src="@/img/telegramm.png">
                </a>
                <a href="https://github.com/squyz">
                    <img src="@/img/github.png">
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data(){
            return {
                headerSpan: false,
                historySpan: false,
                waysSpan: false,
            }
        },
        methods: {
            setHeaderSpan(bool){
                this.headerSpan = bool;
            },
            setHistorySpan(bool){
                this.historySpan = bool;
            },
            setWaysSpan(bool){
                this.waysSpan = bool;
            }
        },
    }
</script>

<style scoped>
.active{
    opacity: 1 !important; 
    transform: translateX(0px) !important;
}
.header{
    width: 100%;
    height: 1080px;
    background-image: url('@/img/headerImg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 44px;
}
.header-head{
    opacity: 0;
    transform: translateY(-100px);
    transition: all 0.6s ease-out;
    font-size: 48px;
}
.header-text{
    opacity: 0;
    transform: translateX(-100px);
    font-size: 24px;
    max-width: 464px;
    transition: all 0.8s ease-out;
}

.history{
    background-color: white;
    color: black;
}
.history-content{
    padding: 64px;
    min-height: 684px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.history-note{
    font-size: 12px;
}
.history-blocks{
    margin-top: 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 48px 128px;

}
.history-block{
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;
    transition: all 0.8s ease-in-out;
    opacity: 0;
}
.history-block-left{
    transform: translateX(-100px);
}
.history-block-right{
    transform: translateX(100px);
    gap: 24px;
}
.history-block-header{
    font-size: 24px;
    font-weight: 400;
    color: darkred;
}
.history-block-text{
    font-size: 20px;
}

.ways{
    padding: 64px;
    min-height: 444px;
    background: url('@/img/background2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 96px;
    color: white;
}
.ways-blocks{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 48px;
}
.ways-block{
    display: flex;
    flex-direction: column;
    gap: 24px;
    transition: all .8s ease-in-out;
    opacity: 0;
}
.ways-block-left{
    transform: translateX(-100px);
}
.ways-block-bottom{
    transform: translateY(100px);
}
.ways-block-right{
    transform: translateX(100px);
}
.ways-block-number{
    border: 2px solid white;
    padding: 3px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ways-block-text{
    font-size: 18px;
}

.about{
    min-height: 590px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    padding: 120px 0px;
}
.about-text{
    text-align: center;   
}
.about-span{
    display: inline-block;
    margin-top: 24px;
    color: rgb(112, 112, 112);
}
.about iframe{
    border-radius: 24px;
    aspect-ratio: 16/9;
    width: 60%;
}

.footer{
    height: 90px;
    background-color: rgb(134, 118, 75);
    display: flex;
    justify-content: end;
    align-items: center;
}
.footer-contacts{
    display: flex;
    gap: 12px;
}
.footer img{
    width: 48px;
}

@media screen and (width < 1120px){
    .history-blocks{
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (width < 1000px){
    .history-blocks{
        grid-template-columns: 1fr;
        gap: 24px;
    }
    .ways-blocks{
        grid-template-columns: 1fr;
    }
    .ways-block{
        transform: translateX(-100px);
    }
}
@media screen and (width < 720px){
    .header h1{
        font-size: 36px;
    }
    .about iframe{
        width: 80%;
    }
    .history-content{
        padding: 64px 15px;
    }
    .history-block{
        transform: translate(-50px);
        gap: 12px;
    }
    .history-block-text{
        text-align: left;
    }
}
</style>