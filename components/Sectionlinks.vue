<template>
    <div class="section">
        <p class="mx-9 mt-5 text-cap text-uppercase">Manage customers</p>
            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="analytics"/>
                <span class="mx-3 mt-1">Analytics</span> 
                </span>
            </nuxt-link>
        
            <nuxt-link to="#" class="text-settings">
                    <span class="flex-content mx-8 ">
                    <Icon name="orders"/>
                    <span class="mx-3 mt-1">Orders</span>
                    <Icon name="dropdown" class="mx-16"/> 
                    </span>
                </nuxt-link>

            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="customers"/>
                <span class="mx-3 mt-1">Customers</span>
                <Icon name="dropdown" class="mx-9"/> 
                </span>
            </nuxt-link>

            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="category"/>
                <span class="mx-3 mt-1">Categories</span>
                <Icon name="dropdown" class="mx-9"/> 
                </span>
            </nuxt-link>

            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="new"/>
                <span class="mx-3 mt-1">Support</span> 
                </span>
            </nuxt-link>
            
            <!-- vendors -->
            <p class="mx-9 mt-5 text-cap text-uppercase">Manage vendors</p>
            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="analytics"/>
                <span class="mx-3 mt-1">Analytics</span> 
                </span>
            </nuxt-link>
        
            <nuxt-link to="#" class="text-settings ">
                    <span class="flex-content mx-8">
                    <Icon name="orders"/>
                    <span class="mx-3 mt-1">Orders</span>
                    <Icon name="dropdown" class="mx-16"/> 
                    </span>
                </nuxt-link>

            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="vendor"/>
                <span class="mx-3 mt-1">Vendors</span>
                <Icon name="dropdown" class="mx-14"/> 
                </span>
            </nuxt-link>

            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="product"/>
                <span class="mx-3 mt-1">Products</span>
                <Icon name="dropdown" class="mx-12"/> 
                </span>
            </nuxt-link>

            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="new"/>
                <span class="mx-3 mt-1">Support</span> 
                </span>
            </nuxt-link>

            <!-- Driver -->
            <p class="mx-9 mt-5 text-cap text-uppercase">Manage Drivers</p>
            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="analytics"/>
                <span class="mx-3 mt-1">Analytics</span> 
                </span>
            </nuxt-link>
        
            <nuxt-link to="#" class="text-settings ">
                    <span class="flex-content mx-8">
                    <Icon name="orders"/>
                    <span class="mx-3 mt-1">Orders</span>
                    <Icon name="dropdown" class="mx-16"/> 
                    </span>
                </nuxt-link>

            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="driver"/>
                <span class="mx-3 mt-1">Drivers</span>
                <Icon name="dropdown" class="mx-15"/> 
                </span>
            </nuxt-link>

            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="new"/>
                <span class="mx-3 mt-1">Support</span> 
                </span>
            </nuxt-link>

            <p class="mx-9 mt-5 text-cap text-uppercase">General</p>
            <nuxt-link to="#" class="text-settings ">
                <span class="flex-content mx-8">
                <Icon name="profile"/>
                <span class="mx-3 mt-1">Settings</span> 
                </span>
            </nuxt-link>
        
            <nuxt-link to="#" class="text-settings ">
                    <span class="flex-content mx-8">
                    <Icon name="logout"/>
                    <span class="mx-3 mt-1">Logout</span>
                    </span>
            </nuxt-link>                
    </div>
</template>
<style scoped>
.text-cap{
    color: #8D8D8D;
    font-family: 'Space Grotesk';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.07em;
}
.flex-content{
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    /* max-width: 400px; */
    width: 80%;
    
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

.a-link-hover:hover{
    padding: 20px;
    background: #8D8D8D;
    width: 100%;
}

</style>