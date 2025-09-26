import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
        const menu = {
            0:{
                name: 'Burger',
                image: "/images/menu/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
                price: 250,
                description: 'Beef burger with cheese, onion, tomato and lettuce',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Food'
            },
            1:{
                name: 'Pizza',
                image: "/images/menu/aldward-castillo-p1SBJANd0Q8-unsplash.jpg",
                price: 850,
                description: 'Beef, chicken and bacon toppings',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Food'
            },
            3:{
                name: 'Soda',
                image: "/images/menu/eiliv-aceron-6pEbHJ03fKs-unsplash.jpg",
                price: 50,
                description: 'Choose a flavor',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Drink'
            },
            4:{
                name: 'Tea',
                image: "/images/menu/filipp-romanovski-WZ353829OWs-unsplash.jpg",
                price: 50,
                description: 'Kenyan Tea',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Drink'
            },
            5:{
                name: 'Fries',
                image: "/images/menu/joyce-panda-lpsbMRRqMQw-unsplash.jpg",
                price: 150,
                description: 'Crispy fries',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Food'
            },
            6:{
                name: 'Sausage',
                image: "/images/menu/louis-hansel-JeJ5IpCG1mw-unsplash.jpg",
                price: 50,
                description: 'Beef, chicken or pork',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Food'
            },
            7:{
                name: 'Coffee',
                image: "/images/menu/dani-ZLqxSzvVr7I-unsplash.jpg",
                price: 50,
                description: 'Kenyan coffe',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Drink'
            },
            8:{
                name: 'Sandwich',
                image: "/images/menu/mae-mu-IZ0LRt1khgM-unsplash.jpg",
                price: 250,
                description: 'Bread, ham, tomato, onion and lettuce',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Food'
            },
            9:{
                name: 'Chicken',
                image: "/images/menu/erik-mclean-UBtRdqWUbzc-unsplash.jpg",
                price: 250,
                description: '2 pieces of crispy chicken',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Food'
            },
            10:{
                name: 'Water',
                image: "/images/menu/charlesdeluvio-edBR3b2JAuA-unsplash.jpg",
                price: 50,
                description: 'Drinking water',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Drink'
            },
            11:{
                name: 'Breakfast Combo',
                image: "/images/menu/guillermo-nolasco-VVoLblJFbDg-unsplash.jpg",
                price: 550,
                description: 'Tea or Coffee, Pancake, Eggs, and Bacon',
                longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac diam mauris. Cras eu elit sollicitudin nisl mattis suscipit. Curabitur laoreet, risus nec eleifend lobortis, tellus ipsum pellentesque leo, nec accumsan elit metus nec felis. Cras dictum justo vitae ex ultricies commodo. Etiam tempus mattis dolor a viverra. Aenean pulvinar enim eu odio posuere luctus.',
                category: 'Drink'
            },
        }
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})
