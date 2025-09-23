<script setup>

</script>

<template>
    <!-- Carousel -->
    <v-container>
        <v-row>
            <v-carousel>
                <v-carousel-item src="/images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/ella-olsson-mmnKI8kMxpc-unsplash.jpg"></v-carousel-item>
                <v-carousel-item src="/images/robin-stickel-tzl1UCXg5Es-unsplash.jpg"></v-carousel-item>
            </v-carousel>
        </v-row>
    </v-container>
    <!-- About -->
    <v-container>
        <v-row>
            <v-card align="center">
                <p class="text-h4"><b>Welcome to Jikoni!</b></p>
                <p class="text-h6">At Jikoni, we believe the best meals are shared with loved ones. Our name, which means "kitchen" in Swahili, reflects our mission: to create a warm, inviting space where everyone feels at home. We're passionate about bringing people together through food, celebrating the rich and diverse flavors of East Africa with a modern twist.</p>
                <p class="text-h6">Our menu is a tribute to tradition and a nod to innovation, crafted with fresh, locally sourced ingredients and a whole lot of heart. From our sizzling platters to our comforting stews, every dish tells a story of community, heritage, and the joy of a good meal.</p>
                <p class="text-h6">Come on in, pull up a chair, and join our table. We can’t wait to share our kitchen with you.</p>
            </v-card>
        </v-row>
    </v-container>
    <!-- News -->
    <v-container>
        <v-row>
            <v-col md="4">
                <v-card color="deep-purple-lighten-1">
                    <v-img 
                    src="/images/muhammad-afandi-Yal_ZnXDYAU-unsplash.jpg" 
                
                    height="200" 
                    cover>
                </v-img>
                <v-card-title>Pizza Fest</v-card-title>
                <v-card-subtitle> Join us this and every Friday for our Pizza fest and sample a slice of of pizza flavours</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card color="deep-purple-lighten-1">
                    <v-img 
                    src="/images/" 
                    class="align-end text-white" 
                    height="200" 
                    cover>
                    <v-card-title>Sample Text</v-card-title>
                </v-img>
                <v-card-subtitle> another sample text</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card color="deep-purple-lighten-1">
                    <v-img 
                    src="/images/" 
                    class="align-end text-white" 
                    height="200" 
                    cover>
                    <v-card-title>Sample Text</v-card-title>
                </v-img>
                <v-card-subtitle> another sample text</v-card-subtitle>
                <v-card-actions>
                    <v-btn> Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!-- Footer -->
    <v-container>
        <v-row>
           <v-footer class="text-center d-flex flex-column ga-2 py-4" color="deep-purple-lighten-1">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkedin'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
        </v-row>
    </v-container>
</template>