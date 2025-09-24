<script setup>

const menu = {
    0:{
        name: 'Burger',
        image: "/images/menu/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
        price: 250,
        description: 'Beef burger with cheese, onion, tomato and lettuce',
        category: 'Food'
    },
    1:{
        name: 'Pizza',
        image: "/images/menu/aldward-castillo-p1SBJANd0Q8-unsplash.jpg",
        price: 850,
        description: 'Beef, chicken and bacon toppings',
        category: 'Food'
    },
    3:{
        name: 'Soda',
        image: "/images/menu/eiliv-aceron-6pEbHJ03fKs-unsplash.jpg",
        price: 50,
        description: 'Choose a flavor',
        category: 'Drink'
    },
    4:{
        name: 'Tea',
        image: "/images/menu/filipp-romanovski-WZ353829OWs-unsplash.jpg",
        price: 50,
        description: 'Kenyan Tea',
        category: 'Drink'
    },
    5:{
        name: 'Fries',
        image: "/images/menu/joyce-panda-lpsbMRRqMQw-unsplash.jpg",
        price: 150,
        description: 'Crispy fries',
        category: 'Food'
    },
    6:{
        name: 'Sausage',
        image: "/images/menu/louis-hansel-JeJ5IpCG1mw-unsplash.jpg",
        price: 50,
        description: 'Beef, chicken or pork',
        category: 'Food'
    },
    7:{
        name: 'Coffee',
        image: "/images/menu/dani-ZLqxSzvVr7I-unsplash.jpg",
        price: 50,
        description: 'Kenyan coffe',
        category: 'Drink'
    },
    8:{
        name: 'Sandwich',
        image: "/images/menu/mae-mu-IZ0LRt1khgM-unsplash.jpg",
        price: 250,
        description: 'Bread, ham, tomato, onion and lettuce',
        category: 'Food'
    },
    9:{
        name: 'Chicken',
        image: "/images/menu/erik-mclean-UBtRdqWUbzc-unsplash.jpg",
        price: 250,
        description: '2 pieces of crispy chicken',
        category: 'Food'
    },
    10:{
        name: 'Water',
        image: "/images/menu/charlesdeluvio-edBR3b2JAuA-unsplash.jpg",
        price: 50,
        description: 'Drinking water',
        category: 'Drink'
    },
    11:{
        name: 'Breakfast Combo',
        image: "/images/menu/guillermo-nolasco-VVoLblJFbDg-unsplash.jpg",
        price: 550,
        description: 'Tea or Coffee, Pancake, Eggs, and Bacon',
        category: 'Drink'
    },
}

</script>

<template>
    <h1>Menu</h1>

    <v-container>
        <v-row>
            <v-col md="3" v-for="item in menu" :key = "item">
                <v-card color="deep-purple-lighten-1" >
                    <v-img :src="item.image" height="200" cover></v-img>
                    <v-row>
                        <v-col md="6">
                            <v-card-title>{{item.name}}</v-card-title>
                        </v-col>
                        <v-col md="6">
                            <v-chip>{{item.category}}</v-chip>
                        </v-col>
                    </v-row>
                    <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                    <v-card-actions>
                        <v-card-title>{{ item.price }}</v-card-title>
                        <v-btn>Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>