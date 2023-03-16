<template>
    <div class="HomePage">
        <button @click="Redirect()">Login</button>
    </div>
    
</template>

<script>
    export default {
        methods: {
            Redirect() {
            this.$router.push({name: 'Login'});
            }
        },
        name: 'HomePage',
        props: {
            
        }
    }
</script>