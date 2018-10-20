<!-- Parent Component -->
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 ">
                <nav-component></nav-component>
            </div>
            <div class="col-md-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import AppNav from './AppNav'
    export default {
        components: {
            'nav-component': AppNav
        }
    }
</script>