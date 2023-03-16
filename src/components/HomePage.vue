<template>
    <div class="HomePage">
        <!-- <nav class="bg-gradient-to-b from-black to-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <router-link to="/" class="text-white font-bold text-lg hover:text-gray-300">
                    Home
                    </router-link>
                </div>
                <div class="flex items-center">
                    <router-link to="/login" class="text-white font-bold text-lg hover:text-gray-300">
                    Login
                    </router-link>
                </div>
                </div>
            </div>
        </nav> -->






        <nav class="navbar" style="
        background: linear-gradient(to bottom, #000000, #ffffff);
        display: flex;
        justify-content: space-between;
        align-items: top;
        height: 60px;
        padding: 0 20px;">
            <div class="navbar-left" style="
            display: flex;
            justify-content: flex-start;
            align-items: center;">
                <router-link to="/"><button class="navbar-btn btn-home" style="
                background: linear-gradient(to bottom, #ffffff, #000000);
                color: #ffffff;
                font-weight: bold;
                font-size: 0.6rem;
                border: none;
                border-radius: 5px;
                padding: 10px 20px;
                margin: 0 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;">Home</button></router-link>
            </div>
            <div class="navbar-right" style="
            display: flex;
            justify-content: flex-end;
            align-items: center;">
                <router-link to="/login"><button class="navbar-btn btn-login" style="
                background: linear-gradient(to bottom, #ffffff, #000000);
                color: #ffffff;
                font-weight: bold;
                font-size: 0.6rem;
                border: none;
                border-radius: 5px;
                padding: 10px 20px;
                margin: 0 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;">Login</button></router-link>
            </div>
        </nav>
        <router-link to="/login">Login</router-link>
    </div> 
</template>

<script>
    export default {
        name: 'HomePage',
        props: {
            
        }
    }
</script>
