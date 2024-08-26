<template>
    <div class="paddin-top-bottom sombra" style="margin-top: 5px;">
        <nav class="title-nav">
            <div class="nav-logo">
                <img src="../assets/img/logo-ventanilla.png" alt="Logo Municipal" />
            </div>
            <div>
                    <h1 class="text-3d fs-title">Sistema de Gestión Municipal</h1>
                    <div>
                        <ul class="nav-menu">
                            <li v-for="item in menuItems" :key="item.id">
                            <a :href="item.link">{{ item.text }}</a>
                            </li>
                        </ul>
                    </div>
            </div>
            
      <div class="nav-user">
        {{ userName }}
      </div>
    </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = ref([
  { id: 1, text: 'Inicio', link: '#' },
  { id: 2, text: 'Servicios', link: '#servicios' },
  { id: 3, text: 'Contacto', link: '#contacto' },
]);

const userName = ref('Herrera Ayay, Eduardo');
</script>

<style lang="sass" scope>
    @import '../assets/sass/style.sass'
      
    .text-3d 
        font: bold /1 arial
        text-transform: uppercase
        color: #0068B3
        text-shadow: 3px 8px 15px rgba(0,0,0,0.1), 3px 5px  5px rgba(0,0,0,0.3)
        letter-spacing: 3px
    
    // .paddin-top-bottom   
    //     padding-top: 150px
    //     padding-bottom: 5px
    
    .fs-title
        font-size: 40px
        @include phone
            font-size: 15px
        @include tablet
            font-size: 20px
        @include laptop
            font-size: 30px
        // @include desktop
        //     font-size: 35px
    
    .title-nav
        // background-color: aquamarine
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
        padding: 10px 20px

    .nav-logo
        flex: 0 0 auto
        margin-top: -25px
        
        img
        height: 50px
        width: auto

    .nav-menu
        flex: 1 1 auto
        display: flex
        gap: 15px
        justify-content: center
        list-style-type: none
        margin: 0
        padding: 0

        li
        margin-top: 10px

        a
            text-decoration: none
            color: #333
            font-weight: bold

            &:hover
            color: #007bff

        .nav-user            
            flex: 0 0 auto
            font-weight: bold
</style>