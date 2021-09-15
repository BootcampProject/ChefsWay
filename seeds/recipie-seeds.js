const { Recipie } = require('../models');

const recipiedata = [
    {
        title: 'Balsamic Pineapple Chicken Skewers',
        description: 'Grilled pineapple in the summer time is one of the best things to do with fruit. In my family we do it all the time and serve it with vanilla ice cream. One summer we ate so much grilled pineapple that we actually got sick of it so I wanted to figure out something different. I told my family I was going to make them something new and exciting, and savory with the pineapple, and that is exactly what I did.',
        ingredients: '½ cup balsamic vinegar\n2 tsp. EVOO\n2 tbsp. chopped ginger\n2 garlic cloves chopped\n2 tsp. coriander powder\n2 tsp. pasilla chili powder\nsalt and pepper to taste\n8 skewers (pre soaked in hot water for 30 minutes)\n4 chicken breasts cut into 1 inch cubes\n½ pineapple cut into 1 inch cubes',
        directions: '1. In a bowl mix together all the ingredients for the marinade 2. Prepare the chicken pineapple skewers by alternating chicken and pineapple until the skewer is full. Prepare all the skewers like this. 3. Once the skewers are made place them into the marinade and let them marinate for 4 hours. 4. After the skewers are finished marinated put your grill on a medium high heat. 5. Grill the skewers for 5 minutes per side on all sides until the pineapple has a nice char and the chicken is fully cooked.',
        comment_id: '1',
        user_id: '1'
    },
]









const seedRecipie = () => Post.bulkCreate(recipiedata);

module.exports = seedRecipie;
