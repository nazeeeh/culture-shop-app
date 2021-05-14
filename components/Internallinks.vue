<template>
    <div class="internal-links mt-8">
        <div class="dashboard mx-8">
            <Icon name='dashboard' class="grey-lighten-2" active/>
            <nuxt-link class="text-settings a-link-hover mx-3 mt-1" to="/">
            Dashboard
        </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>

.internal-links{   
    width: 100%;
    padding: 5px;
}
.dashboard {
    display: flex;
    flex-wrap: nowrap;

}
.text-settings{
    font-family: 'Space Grotesk';
    text-transform: uppercase;
    letter-spacing: 0.07em;
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;
    color: #192135;
}


</style>