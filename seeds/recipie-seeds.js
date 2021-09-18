const { Recipie } = require('../models');

const recipiedata = [
    {
        title: 'Apple Wild Rice Stuffed Chicken Breast',
        description: 'In the fall my sister and I love to go apple picking and we go at least 3 times before the winter months. We come home with so many apples that it is hard to eat all of them. This is when I start to come up with different recipes to use the apples, and I like to mix it up with savory and sweet. This recipe is a mix of flavors, and is one I have been making for many years.',
        ingredients: '1 cup wild rice\n2 cups chicken stock\n1 shallot diced\n1 red chili\n3 apples small diced\n½ cup toasted pine nuts\n½ cup chopped dried cranberries\n3 sprigs thyme chopped\n1 tsp. cinnamon\n1 tsp. ground ginger\n2 tbsp. EVOO\nsalt and pepper to taste\n4 boneless chicken breasts',
        table_meals: 'For a complete family meal serve the stuffed chicken with pan-fried Jerusalem artichokes, and balsamic glazed French beans.',
        directions: '1.	In a pot add half of the EVOO. Sauté the shallot and chili in the oil for 2 minutes, then add the rice and toast for another 2 minutes. Add the chicken stock and let the rice come to a boil.\n2.	Once the rice has come to a boil cover and put the heat on low. Let simmer for 30 minutes until all the liquid is absorbed.\n3.	In a sauté pan add the other half of the EVOO. Add the apple, cinnamon, ginger, and thyme. Sauté until the apples have some color on them. Do not over cook the apples. You want them to still have some bite and not to be mush.\n4.	Mix in the pine nuts and the dried cranberries. Season with salt and pepper.\n5.	Mix the apple mixture with the rice and put in the fridge to completely cool.\n6.	Pre-heat oven to 375F\n7.	Once the stuffing is completely cooled take the chicken breasts and cut a slit in the top (the thickest part of the breast) and around the side, this will make a pocket in the chicken. You just want to go ¾ of the way through the breast; you still want the chicken to be intact.\n8.	Stuff the stuffing inside of the chicken. Make sure to really press the stuffing into the chicken, as you want it to go all the way through.\n9.	Once you have done that to all 4 chicken breast. Season the outside with green salt and place on a baking tray.\n10.	Bake in the oven for 30 minutes until the chicken is fully cooked and moist. It should be 165F on a meat thermometer.',
        comment_id: '5',
        user_id: '2'
    },
    {
        title: 'Balsamic Pineapple Chicken Skewers',
        description: 'Grilled pineapple in the summer time is one of the best things to do with fruit. In my family we do it all the time and serve it with vanilla ice cream.  One summer we ate so much grilled pineapple that we actually got sick of it so I wanted to figure out something different. I told my family I was going to make them something new and exciting, and savory with the pineapple, and that is exactly what I did.',
        ingredients: '½ cup balsamic vinegar\n2 tsp. EVOO\n2 tbsp. chopped ginger\n2 garlic cloves chopped\n2 tsp. coriander powder\n2 tsp. pasilla chili powder\nsalt and pepper to taste\n8 skewers (pre soaked in hot water for 30 minutes)\n4 chicken breasts cut into 1 inch cubes\n½ pineapple cut into 1 inch cubes',
        table_meals: 'For a family meal these balsamic pineapple chicken skewers are best served with sesame soy Asian slaw and stir-fry noodles',
        directions: '1.	In a bowl mix together all the ingredients for the marinade\n2.	Prepare the chicken pineapple skewers by alternating chicken and pineapple until the skewer is full. Prepare all the skewers like this.\n3.	Once the skewers are made place them into the marinade and let them marinate for 4 hours.\n4.	After the skewers are finished marinated put your grill on a medium high heat.\n5.	Grill the skewers for 5 minutes per side on all sides until the pineapple has a nice char and the chicken is fully cooked.',
        comment_id: '6',
        user_id: '3'
    },
    {
        title: 'Homemade Tuna Salad',
        description: 'One of my dads’ all-time favorite sandwiches is a tuna melt. I remember as a kid he would always make them for me. He would mix up the tuna with so many different ingredients, that the tuna would have texture to it and the sandwich was delicious. This recipe is a rendition of my dads’ tuna salad, and one that I am happy to share with my family and with yours.',
        ingredients: '2 cans tuna packed in water (this is what I like to use but any tuna will do)\n2 tbsp. mayonnaise\n½ pepper small dice\n1 rib of celery small dice\n2 dill pickles small dice\n2 tbsp. capers chopped\n2 sprigs green onion chopped\n2 sprigs dill shopped\n1 lime zest\nsalt and pepper to taste\n8 slices whole wheat bread\n4 slices of cheddar cheese\n1 tomato sliced',
        table_meals: 'For a complete family meal serve the tuna salad with a mixed green salad with a honey and balsamic dressing',
        directions: '1.	Open the cans of tuna and drain all the liquid\n2.	In a bowl with the tuna add all the ingredients\n3.	With a fork flake and mix the tuna salad together\n4.	Do not over mix, as you still want the texture from the tuna and the vegetables.\n5.	Spread the tuna on one slice of the bread and top with cheddar cheese place in a toaster oven until the cheese is melted. Top with sliced tomato and the other slice of bread for perfect tuna melts.',
        comment_id: '7',
        user_id: '4'
    },
    {
        title: 'Honey Garlic Pork Ribs',
        description: 'I love going to Chinese restaurants and getting sticky ribs that make a mess all over my hands and face. Living in Asia I got a first hand look at some Chinese restaurant secrets and how they make some really good food. I have taken that knowledge and with my love for experimenting with different cuisines I have brought home my favorite ribs and made them stickier and better. I have put my chef spin on a Chinese classic and added some spice to it too.',
        ingredients: '2 tbsp. Honey\n2 tbsp. brown sugar\n2 tbsp. soya sauce\n2 tbsp. oyster sauce\n2 tbsp. hoisin sauce\n1 tbsp. rice wine vinegar\n1 tsp. lemon\n2 tbsp. chopped garlic\n1 tbsp. Szechwan pepper\nsalt and pepper to taste\n2 racks pork ribs (serves 4 people with left overs)',
        table_meals: 'For a complete family meal these honey garlic pork ribs are best served with Asian stir-fry vegetables and stir-fry noodles.',
        directions: '1.	Pre-heat the oven to 350F\n2.	Place the ribs in a braising pan with a lid and cook for 1 hour and 30 minutes.\n3.	In a bowl mix all the ingredients for the honey garlic sauce.\n4.	Once the ribs have been in the oven for 1 hour and 30 minutes, pour the Honey Garlic Sauce over the ribs\n5.	Turn the oven up to 375F and let the ribs continue to cook without a lid for 45 minutes.\n6.	When the ribs are ready the sauce will be caramelized and sticky.',
        comment_id: '8',
        user_id: '5'
    },
    {
        title: 'Lamb T-Bones',
        description: 'My mom, my sister, and I love lamb, but we never wanted to cook a whole rack of lamb. With meat just as tender, lamb T-bones became a staple in my house. With my chef twist on Greek flavors this dish is easy to prepare. My sister asks me to make them at least once every 2 weeks, but with a meal this easy I am happy to please.',
        ingredients: '8 Lamb T-bones (This in enough to serve 4 people but if your family loves meat I would go ahead and get a few more)\n½ tsp. garlic powder\n½ tsp. dried basil\n½ tsp. dried oregano\n½ tsp. dried chili flakes\n2 tbsp. EVOO\nsalt and pepper to taste',
        table_meals: 'For a complete family meal these lamb T-bones are best served with Humus, Tzatziki, Greek salad and pita bread.',
        directions: '1.	On a plate mix together garlic powder, dried basil, dried oregano, dried chili flakes, salt, pepper and EVOO. This will make a wet rub for the lamb.\n2.	Rub the marinade into the lamb and let sit on a counter for 20 minutes.\n3.	Pre-heat a non-stick frying pan.\n4.	In the dry, hot pan place the lamb and cook for 7 – 10 minutes per side for medium rare lamb.\n5.	Let rest under tin foil for at least 3 minutes before serving to ensure juicy and flavorful lamb',
        comment_id: '9',
        user_id: '6'
    },
    {
        title: 'Mom’s Veal Parmesan',
        description: 'As a kid I loved going to Italian restaurants and eating Veal Parmesan, but more times then not it was over loaded with cheese and not as tasty as one would think. This is how my mom came up with this healthier version of a classic dish.  By seeing a problem, trying to fix it. Now I have put my own spin on a dish my mom made for me.',
        ingredients: '4 Veal Cutlets\n½ cup day old bread (I like to use baguette, but any bread you have will do)\n¼ cup corn meal\n2 sprigs fresh chopped parsley\n½ tsp. garlic powder\n½ tsp. dried chili flakes\n3 tbsp. EVOO\n2 Eggs\n¼ cup A/P Flour\nsalt and pepper to taste\n1 Red pepper sliced\n1 Spanish Onion Sliced\n½ cup button mushrooms sliced\n1 tsp. Fresh chopped garlic\n2 sprigs fresh chopped basil\n¾ cup fresh grated parmesan cheese',
        table_meals: 'For a complete family meal, this Veal Parmesan is best served with a side of Caesar salad and pasta in tomato sauce.',
        directions: '1.	Pre-heat oven to 350F\n2.	In a food processor add chunks of the bread and pulse until fine crumbs.\n3.	Add the breadcrumbs along with the corn meal, chopped parsley, garlic powder, dried chili flakes, salt and pepper to a bowl and mix\n4.	In a separate bowl crack and mix the eggs and season with salt and pepper\n5.	In another bowl add the flour and season with salt and pepper\n6.	First dip the veal into the flour and coat. Shake of any excess flour, then dip into the egg mixture and then into the bread crumbs. Coat well with the crumbs.\n7.	Once all four are coated, heat the EVOO up in a frying pan and pan sear the veal until golden brown. You do not need to cook them all the way through at this point.\n8.	Place the veal onto a baking sheet with parchment paper.\n9.	In the same pan that you cooked the veal add garlic onions, mushrooms, and pepper and sauté until soft then add the chopped basil.\n10.	Top the veal with tomato sauce, the sautéed vegetables and then sprinkle with Parmesan cheese.\n11.	Bake in the 350F oven for 20 – 25 minutes or until the veal is cooked and the cheese is golden brown.',
        comment_id: '10',
        user_id: '7'
    },
    {
        title: 'Sheppard’s Pie',
        description: 'I’m going to be honest with you as a kid I did not like Sheppard’s pie, it was not until the last couple of years that I have really enjoyed this homey dish my mom makes. But every time my mom makes it I always think of a way I can add my own twist on a classic dish. And then it hit me why not combine two dishes into one. I have taken my moms Sheppard’s pie and combined it with my braised short ribs to make an upscale version of a childhood dish that I have recently come to love.',
        ingredients: '4 pieces beef short ribs\n½ cooking onion diced\n1 carrot diced\n1 cup peas\n1 zucchini diced\n½ cup brown mushrooms diced\n1 can purred tomatoes\n1 tbsp. Worcestershire sauce\n½ cup red wine\n2 bay leafs\n2 sprigs thyme\n2 sprigs parsley\n2 cloves garlic chopped\n1 tbsp. Vegetable oil\nsalt and pepper to taste\n5 large Yukon gold potatoes peeled and chopped\n½ cup sour cream\n3 tbsp. butter\n½ cup milk\n¾ cup grated cheese (I like to use parmesan but any cheese you like will work)\n2 tbsp. smoked paprika\nsalt and pepper to taste',
        table_meals: 'For a complete family meal this Sheppard’s pie is best served with Balsamic glazed French beans.',
        directions: '1.	Pre-heat oven to 350F\n2.	In a braising pan add the vegetable oil. Season the short ribs with salt and pepper. Brown the short ribs on all sides. Once the short ribs are browned remove from the braising pan and leave to the side\n3.	In the same pan you browned the beef in add the onion, zucchini, mushrooms, and carrots and garlic. Sauté until tender.\n4.	Add the Worcestershire sauce and the red wine. Let the red wine reduce by half. Add the short ribs back into the pan with the can of tomato puree. Add the bay leaf, thyme and parsley and bring to a boil.\n5.	Cover the pan and place into the oven and let cook for 1 hour and 30 minutes\n6.	Once the short ribs are cooked take them out of the sauce and shred them with a fork. Make sure to take out the sprigs of thyme and parsley as well as the bay leafs.\n7.	Add the shredded meat and peas to the sauce and continue to simmer on the stove until the sauce has thickened up. About 20 minutes\n8.	While the sauce is thickening boil the potatoes to make your mashed potatoes.\n9.	Once the potatoes are tender mash them with the sour cream, milk, butter, and cheese. Season them with salt and pepper.\n10.	In a casserole dish add the braised short ribs. Then add the mashed potatoes on top. Sprinkle the top of the mashed potatoes with the smoked paprika.\n11.	Place the Sheppard’s pie back into the 350F oven until golden brown and bubbly.',
        comment_id: '11',
        user_id: '8'
    },
    {
        title: 'Tilapia Fish Tacos',
        description: 'Who doesn’t love tacos, and fish tacos for that matter. This southern California staple is so good I had to bring it home to my table. When I was down in California surfing, for lunch we would get fish tacos and they had to be some of the best fish tacos I have ever eaten. Right on the beach the fish was so fresh and tasty. This is a fun summer meal to relax with and chill out while eating under the sun.',
        ingredients: '4 tilapia filets cut into 3 strips each\n2 limes juice and zest\n1 tbsp. cumin\n1 tbsp. smoked paprika\nsalt and pepper to taste\n1 avocado\n½ cup sour cream or plain yogourt\n2 sprigs cilantro chopped\n1 lime juice and zest\nsalt and pepper to taste\n½ bunch Cilantro\n1 package soft corn tortillas',
        table_meals: 'For a complete family meal these fish tacos are best served with grilled corn salad.',
        directions: '1.	In a bowl add the lime juice and zest, cumin, smoked, paprika, and salt and pepper. Marinate the Tilapia for 30 minutes.\n2.	On a high grill, grill the tilapia for 5 minutes a side until fully cooked.\n3.	To make the avocado cream, in a food processor add the avocado, sour cream or yogurt, cilantro, lime juice and zest, and salt and pepper. Process until a smooth consistency, almost like a dressing.\n4.	Serve the tilapia in a soft corn tortilla with salsa, avocado cream and cilantro leaves.',
        comment_id: '12',
        user_id: '9'
    },
    {
        title: 'Ghost Pepper Chimichurri Flank Steak',
        description: 'As a classically trained chef who loves culture and the food network this dish comes from inspiration from my favorite TV chefs, and a trip to Argentina. When I was down in Argentina my mom arranged to do a day of cooking with a local chef. This was an experience I will always remember with flavors and spice that I have brought home with me and cooked with in my kitchen. Learning how to make classic chimichurri I have spiced it up with ghost peppers that I think add a huge punch.',
        ingredients: '1 ghost pepper chopped including seeds (for less heat take out the seeds)\n1 bunch flat leaf parsley\n1 bunch cilantro\n4 garlic cloves\n2 tbsp. cumin\n½ cup red wine vinegar\n1 cup EVOO\nsalt and pepper to taste\n1 – 3 pound flank steak',
        table_meals: 'For a complete family meal this flank steak is best served with zucchini and carrot fries as well as a green salad with lemon poppy seed dressing',
        directions: '1.	In a blender add all the ingredients for the chimichurri sauce. Blend until there are no big chucks of pepper or herbs.\n2.	Take half the chimichurri and rub into the flank steak. Leave the other half off to the side to serve once the steak is cooked.\n3.	 Grill  steak on a hot grill for 5 minutes per side until perfect medium rare.\n4.	Once cooked to your liking (add 2 minutes a side for more well done steak) let rest under tin foil for 5 minutes.\n5.	Once rested cut against the grain on a bias.\n6.	Serve with the rest of the chimichurri sauce.',
        comment_id: '13',
        user_id: '10'
    },
    {
        title: 'Chicken Paella',
        description: 'For my mom’s birthday one year my sister and I wanted to do something totally out of the box and different. A few years earlier we visited Barcelona and had the best paella on the beach. My sister and I remembered this experience and we wanted to recreate that time in my mom’s life for her birthday bash. We made a Spanish themed party and I made a huge pan of savory paella with loads of saffron and a touch of spice, a perfect meal for a huge family and any celebrations.',
        ingredients: '4 boneless skinless chicken thighs diced\n½ pound chorizo sausage cut into 1 cm rounds\n½ pound peeled shrimp\n12 mussels\n1 medium onion chopped\n1 red pepper chopped\n½ cup green peas (frozen works perfectly)\n3 garlic cloves\n1 chili pepper\n2 tbsp. saffron\n½ cup white wine\n2 cups Spanish rice (or any short grain rice at your local store)\n3 cups chicken stock (I like to use low sodium but any will work)\n1 cup tomato puree\n3 tbsp. smoked paprika\n1 tbsp. cumin\n2 tbsp. EVOO\n4 sprigs chopped flat leaf parsley\nSalt and pepper to taste',
        table_meals: 'For a complete family meal this paella is best served with a grilled fig and vegetable salad.',
        directions: '1.	In a large high rimmed sauté pan add the EVOO, garlic, and red chili. Let sauté for a few minutes until the chili is sizzling in the oil. Add the chicken thighs and brown. Continue to cook for 5 minutes.\n2.	In a pot heat the chicken stock with the saffron in the stock.\n3.	Once the chicken has been cooking for 5 minutes add the smoked paprika and cumin. Let the spices cook for 2 minutes and then add the chorizo sausage, onions, and peppers. Let this cook for 8 minutes to get the sausage nice and crispy.\n4.	Pour the rice into the pan to soak up all the flavor from the bottom and then add the white wine to deglaze.\n5.	Then add the tomato puree and stir for 3 minutes. Add the hot saffron infused stock. Stir the rice and the stock together then cover and let cook for 10 minutes.\n6.	Take the lid off the pan and add the peas to the rice and stir that together. Place the shrimp and mussels into the rice and cover with a lid for 15 more minutes.\n7.	When you take the lid off the seafood should be cooked and the rice should have absorbed all the liquid. If there is still some liquid in the pan keep the paella covered and check every 5 minutes until all the liquid is absorbed.\n8.	Garnish with parsley.',
        comment_id: '14',
        user_id: '1'
    },
    {
        title: 'Chicken Meatballs',
        description: 'Everyone has their own meatball recipe, but mine is totally out of the box insane. This recipe came to me one night while I was sleeping, and that is no joke. People have died over my meatballs that I have “almost” become famous for them. They are crazy, easy, and awesomely delicious. So, next time you make your same old meatball recipe, you might want try this one out for a change.',
        ingredients: '1 pound lean ground chicken\n¼ cup ground unsalted pistachios\n2 tbsp. milk\n3 sprigs fresh basil finely chopped\n3 sprigs fresh oregano finely chopped\n1 tsp. dried chili flakes\n1 tsp. garlic powder\nsalt and pepper to taste',
        table_meals: 'For a complete family meal serve these chicken meatballs with homemade spaghetti and tomato sauce.',
        directions: '1.	Pre-heat oven to 400F\n2.	In a food processor ground the pistachios until they become a fine dust. Pour them into a bowl and add the milk. Stir together until it becomes a paste.\n3.	In a bowl add the ground chicken, garlic powder, chili flakes, basil, oregano, pistachio and milk paste, and salt and pepper to taste.\n4.	Mix all the ingredients together and then form meatballs,  place on a baking tray with parchment paper.\n5.	Cook the meatballs for 20-30 minutes in the oven. They will become golden on the outside and stay moist in the middle when cooking at such a high temperature.',
        comment_id: '15',
        user_id: '10'
    },
    {
        title: 'Beef Burgers With Caramelized Onion and Swiss Cheese',
        description: 'These are non-conventional inside out burgers. My dad and I in the summer time would experiment with different flavors in burgers and try and see how many toppings could fit on one burger until they would topple over. Then I saw a clever idea, to stuff the burgers with the toppings. This is when I came up with these burgers. My chefs spin on a classic dish, and a way to fit all the toppings on a burger and get them all into your mouth.',
        ingredients: '2 Spanish onions sliced\n2 tbsp. balsamic vinegar\n1 chili chopped\n1 tsp. vegetable oil\nsalt and pepper to taste\n1 ½ pound lean ground beef\n1 tbsp. Worcestershire sauce\n1 cup grated swiss cheese\nsalt and pepper to taste\n4 hamburger Buns\n',
        table_meals: 'For a complete family meal these beef burgers are best served with Hassel Back Potatoes With Canadian Bacon and grilled fig and vegetable salad.',
        directions: '1.	In a pan heat the vegetable oil. Add the sliced onions and season with salt, pepper and the chopped chili.2.	Let the onions caramelize. Once caramelized add the balsamic vinegar and let cook for another 2 – 3 minutes.\n3.	Cool the onions completely in the fridge.\n4.	In a bowl add the ground beef with Worcestershire sauce and the grated Swiss cheese. Season with salt and pepper.\n5.	Mix the beef with your hands and separate the meat into 4 sections. Take one of the sections and separate that into 2. Take one half and form a patty with it. Add the caramelized onions to the middle of the beef patty and then add the other half of beef on top. Enclose the onions in the beef. Do this for the rest of the beef and onions.\n6.	Once all burgers are formed heat a grill onto medium high and cook for 8 minutes per side. One the burgers are almost done baste them with the Blackberry Chipotle BBQ Sauce and cook for another 2 minutes.\n7.	Serve Burgers on a bun with your favorite burger toppings.',
        comment_id: '4',
        user_id: '9'
    },
    {
        title: 'Moroccan Greek Chicken Rotisserie Kebabs',
        description: 'Kebabs are one of those things that a lot of people make because they are easy to prepare. I am going to show you my chef spin on a dinner classic that I will bet has been on your table once or twice. I learned about rotisserie from my dad and took that to create a totally different experience. This dish takes a little time but it is worth it.',
        ingredients: '16 boneless skinless chicken thighs\n1 cup Greek yogurt\n2 large Spanish onion thickly sliced\n¼ cup orange juice\n1 tsp. onion powder\n2 tsp. garlic powder\n1 tsp. dried oregano\n1 tsp. dried rosemary\n3 tsp. chipotle chili powder\n1 tsp. hot paprika\n3 tsp. cumin\n2 tsp. ground coriander\n3 tbsp. turmeric\n1 lemon\nsalt and pepper to taste',
        table_meals: 'For a complete family meal serve the rotisserie chicken kebab with chickpea, dried cranberry couscous salad.',
        directions: '1.	In a bowl mix together the Greek yogurt, orange juice, onion powder, garlic powder, dried oregano, dried rosemary, chipotle chili powder, hot paprika, cumin, coriander, and turmeric.\n2.	Season the chicken with salt and pepper. Marinate the chicken over night in the marinade\n3.	Heat your grill on a very high.\n4.	On your rotisserie start by placing half of the lemon. Then start to skewer the marinated meat. Start with two pieces of chicken then one round of onion then another 2 pieces of chicken and another round of onion. Continue to do this until you have used all the chicken and onion. Place the other half of the lemon on the other end. Place the kebab of meat onto the bbq rotisserie and start to cook.\n5.	Cook for 45 minutes on the rotisserie. The meat should be nice and charred on the outside and tender on the inside.\n6.	To cut the meat, shave it down the kebab. This is will create tender pieces of chicken and nice pieces of onion.',
        comment_id: '3',
        user_id: '8'
    },
    {
        title: 'Salt and Vinegar Chip Fish Sticks',
        description: 'Frozen fish sticks were never my favorite, but me, my mom and my dad love fish and chips. I remember my parents use to take me to the same fish and chip restaurant over the years when I was growing up, then one day it closed. That is when I decided to make my own version of fish and chips that is as easy to make as those frozen fish fingers. No longer do we go out for fish and chips, this childhood dish is now one of our favorites.',
        ingredients: '3-4 halibut filets cut into 1” strips\n2 cups salt and vinegar chips\n2 eggs\n½ cup A/P flour\n4 tbsp. vegetable oil\nsalt and pepper to taste\n1 cup mayonnaise\n½ cup pickle relish\n2 tbsp. capers\n½ lemon zest and juice\n1 tbsp. chili paste (I prefer sriracha, but any chili paste will do)\nsalt and pepper to taste',
        table_meals: 'For a complete family meal these fish sticks are best served with Bubby’s coleslaw and potato wedges.',
        directions: '1.	Pre-heat oven to 350F\n2.	Crush the salt and vinegar potato chips into fine crumbs and place into a bowl.\n3.	In a seperate bowl scramble the 2 eggs, and in another bowl add the flour and season with salt and pepper\n4.	Season the halibut fingers with salt and pepper\n5.	Place the halibut first into the flour, then into the egg, and finally coat well with the chips. Continue this process for all the halibut\n6.	In a frying pan heat the vegetable oil. Fry the fish until golden brown on all sides. You do not need to fully cook at this point.\n7.	Place the fish onto a baking tray and place into the oven to finish cooking for 10 minutes.\n8.	Mix the tartar sauce while the fish is finishing cooking. Place the mayonnaise, relish, lemon and chili paste into a bowl. Mix well and season with salt and pepper.',
        comment_id: '2',
        user_id: '7'
    },
    {
        title: 'Roasted Halibut in Miso Soup',
        description: 'Miso Soup is one of those dishes to me that is warm and comforting. I have made this simple Japanese delight into a full meal. I came up with this idea one day when my mom was feeling under the weather and she wanted some soup. I was going to make miso soup but I thought it needed something more to it. That is when I added the roasted halibut. The flavors blend so well together I think it was the soup that ultimately made my mom feel better.',
        ingredients: '3 cups chicken broth (I like to use low sodium but any kind of broth will work here)\n2 Thai chilis\n3 cilantro roots\n2-inch piece of ginger root\n2 Kaffire lime leafs\n½ cup white miso paste\n½ cup sliced brown mushrooms\n4 bok choy quartered\n1 cup vermicelli rice noodles\n4 halibut filets\nlime juice and zest\n2 garlic cloves shopped\nsalt and pepper to taste',
        table_meals: 'This is a complete family meal, but if you want just the soup as an appetizer do not add the vegetables or noodles and serve just the broth.',
        directions: '1.	In a pot steep the chicken stock with the Thai chilis, cilantro root, ginger, and Kaffire lime leafs. Let steep for 4 hours until the chicken broth is infused with the flavors.\n2.	Strain the stock and put back on a low heat. Whisk in the miso paste until fully combined.\n3.	Season the halibut with lime juice and zest, garlic, and salt and pepper.\n4.	In a 350F oven roast the halibut for 20 – 25 minutes until fully cooked.\n5.	While the halibut is cooking add the mushrooms bok choy and the raw dry rice noodles to the miso soup.\n6.	The vegetables and noodles will cook in the same time as the halibut.\n7.	Once the halibut is done cooking serve the miso soup with the vegetables and noodles and top with the halibut.',
        comment_id: '1',
        user_id: '6'
    },
]

const seedRecipies = () => Recipie.bulkCreate(recipiedata);

module.exports = seedRecipies;