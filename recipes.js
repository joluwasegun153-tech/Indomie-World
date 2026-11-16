
const recipes = [
    {
        id: "classic-indomie",
        title: "Classic Indomie and Fried Egg",
        description: "Enjoy classic Indomie noodles served with a delicious fully cooked egg.",
        time: "15 Minutes",
        difficulty: "Easy",
        category: "Classic",
        ingredients: ["1 pack of Indomie", "1 fresh egg", "1 small onion", "Fresh pepper (optional)", "Vegetable oil"],
        steps: [
            "Prepare the ingredients.",
            "Cook the noodles according to the package instructions.",
            "Add the seasoning and stir gently.",
            "Prepare the egg separately until fully cooked.",
            "Serve the noodles with the egg."
        ],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "vegetable-stir-fry",
        title: "Indomie Vegetable Stir-Fry",
        description: "A colourful noodle dish with fresh vegetables and delicious seasoning.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Vegetable",
        ingredients: ["1 pack of Indomie", "Carrots", "Green beans", "Sweet pepper", "Onion"],
        steps: ["Wash and prepare the vegetables.", "Cook the noodles according to the package.", "Prepare the vegetables separately.", "Combine the noodles and vegetables.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "spicy-indomie",
        title: "Spicy Indomie Noodles",
        description: "A flavourful noodle recipe with pepper and delicious spices.",
        time: "15 Minutes",
        difficulty: "Easy",
        category: "Spicy",
        ingredients: ["1 pack of Indomie", "Fresh pepper", "Onion", "Vegetable oil"],
        steps: ["Prepare your ingredients.", "Cook the noodles as directed on the package.", "Prepare the pepper and onion separately.", "Combine with the noodles and seasoning.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "chicken-indomie",
        title: "Chicken Indomie",
        description: "Enjoy noodles with delicious, thoroughly cooked chicken pieces.",
        time: "25 Minutes",
        difficulty: "Medium",
        category: "Chicken",
        ingredients: ["1 pack of Indomie", "Cooked chicken", "Onion", "Carrots", "Seasoning"],
        steps: ["Prepare the vegetables.", "Ensure the chicken is thoroughly cooked.", "Cook the noodles according to the package.", "Combine the noodles, vegetables and chicken.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-sausages",
        title: "Indomie and Sausages",
        description: "A tasty noodle meal served with cooked sausage slices.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Special",
        ingredients: ["1 pack of Indomie", "Sausages", "Onion", "Carrots"],
        steps: ["Prepare the ingredients.", "Cook the noodles according to the package.", "Heat the sausages until ready to eat.", "Combine the ingredients.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "creamy-indomie",
        title: "Creamy Indomie",
        description: "A smooth and creamy twist on your favourite noodles.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Creamy",
        ingredients: ["1 pack of Indomie", "Milk", "Cheese", "Onion"],
        steps: ["Prepare the ingredients.", "Cook the noodles according to the package.", "Add a little milk and cheese if desired.", "Stir gently until combined.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "seafood-indomie",
        title: "Seafood Indomie",
        description: "A special noodle recipe with seafood and vegetables.",
        time: "30 Minutes",
        difficulty: "Medium",
        category: "Seafood",
        ingredients: ["1 pack of Indomie", "Shrimp", "Sweet pepper", "Carrots", "Onion"],
        steps: ["Prepare the vegetables.", "Make sure the seafood is fresh and thoroughly cooked.", "Cook the noodles according to the package.", "Combine the noodles, seafood and vegetables.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "cheese-indomie",
        title: "Cheesy Indomie",
        description: "A delicious noodle recipe with a cheesy flavour.",
        time: "15 Minutes",
        difficulty: "Easy",
        category: "Cheese",
        ingredients: ["1 pack of Indomie", "Grated cheese", "Milk (optional)", "Onion"],
        steps: ["Prepare the ingredients.", "Cook the noodles according to the package.", "Add grated cheese.", "Mix gently until combined.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "jollof-indomie",
        title: "Jollof Indomie",
        description: "A Nigerian-inspired noodle dish with tomato and pepper sauce.",
        time: "25 Minutes",
        difficulty: "Medium",
        category: "Nigerian Special",
        ingredients: ["1 pack of Indomie", "Tomatoes", "Pepper", "Onion", "Vegetable oil"],
        steps: ["Prepare the tomatoes, pepper and onion.", "Cook the sauce until ready.", "Cook the noodles according to the package.", "Combine the noodles and sauce.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-plantain",
        title: "Indomie with Plantain",
        description: "Enjoy noodles alongside delicious cooked plantain.",
        time: "25 Minutes",
        difficulty: "Medium",
        category: "Special",
        ingredients: ["1 pack of Indomie", "1 ripe plantain", "Vegetable oil"],
        steps: ["Prepare the plantain.", "Cook the plantain thoroughly.", "Cook the noodles according to the package.", "Arrange both on a plate.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "egg-stir-fry",
        title: "Indomie Egg Stir-Fry",
        description: "A tasty combination of noodles, egg and vegetables.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Egg",
        ingredients: ["1 pack of Indomie", "2 eggs", "Carrots", "Onion"],
        steps: ["Prepare the vegetables.", "Cook the noodles according to the package.", "Cook the eggs completely.", "Combine everything.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-special-mix",
        title: "Indomie Special Mix",
        description: "A special combination of noodles and fresh ingredients.",
        time: "25 Minutes",
        difficulty: "Medium",
        category: "Special",
        ingredients: ["1 pack of Indomie", "Egg", "Carrots", "Sweet pepper", "Onion"],
        steps: ["Prepare all ingredients.", "Cook the noodles according to the package.", "Cook the egg completely.", "Combine with the vegetables.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-bolognese",
        title: "Indomie Bolognese",
        description: "Noodles served with a rich tomato and minced-meat sauce.",
        time: "30 Minutes",
        difficulty: "Medium",
        category: "Special",
        ingredients: ["1 pack of Indomie", "Tomato sauce", "Minced meat", "Onion"],
        steps: ["Prepare the sauce ingredients.", "Cook the minced meat thoroughly.", "Prepare the tomato sauce.", "Cook the noodles according to the package.", "Serve with the sauce."],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-curry",
        title: "Curry Indomie",
        description: "A fragrant noodle dish with curry flavour and vegetables.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Special",
        ingredients: ["1 pack of Indomie", "Curry powder", "Carrots", "Onion"],
        steps: ["Prepare the vegetables.", "Cook the noodles according to the package.", "Add curry seasoning.", "Mix with the vegetables.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-bbq",
        title: "BBQ Indomie",
        description: "A tasty noodle dish with barbecue-inspired flavours.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Special",
        ingredients: ["1 pack of Indomie", "BBQ sauce", "Onion", "Sweet pepper"],
        steps: ["Prepare the vegetables.", "Cook the noodles according to the package.", "Add a little BBQ sauce.", "Mix everything together.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-mushroom",
        title: "Mushroom Indomie",
        description: "A lovely noodle recipe with mushrooms and fresh seasoning.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Vegetable",
        ingredients: ["1 pack of Indomie", "Fresh mushrooms", "Onion", "Garlic"],
        steps: ["Clean and prepare the mushrooms.", "Cook the noodles according to the package.", "Cook the mushrooms thoroughly.", "Combine everything.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-cabbage",
        title: "Indomie Cabbage Mix",
        description: "A crunchy vegetable-inspired noodle meal.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Vegetable",
        ingredients: ["1 pack of Indomie", "Cabbage", "Carrots", "Onion"],
        steps: ["Wash and slice the vegetables.", "Cook the noodles according to the package.", "Prepare the vegetables.", "Mix the noodles and vegetables.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-pepper-soup",
        title: "Indomie Pepper Soup",
        description: "A warming noodle soup with pepper and aromatic spices.",
        time: "25 Minutes",
        difficulty: "Medium",
        category: "Soup",
        ingredients: ["1 pack of Indomie", "Pepper", "Onion", "Soup spices"],
        steps: ["Prepare the soup ingredients.", "Bring the soup base to a simmer.", "Cook the noodles according to the package.", "Combine with the soup.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-tomato",
        title: "Tomato Indomie",
        description: "A simple noodle recipe with fresh tomato sauce.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Classic",
        ingredients: ["1 pack of Indomie", "Fresh tomatoes", "Onion", "Pepper"],
        steps: ["Prepare the tomatoes and onion.", "Cook the tomato sauce.", "Cook the noodles according to the package.", "Combine noodles and sauce.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-garlic",
        title: "Garlic Indomie",
        description: "A flavourful noodle recipe with garlic and vegetables.",
        time: "15 Minutes",
        difficulty: "Easy",
        category: "Classic",
        ingredients: ["1 pack of Indomie", "Garlic", "Onion", "Vegetable oil"],
        steps: ["Prepare the garlic and onion.", "Cook the noodles according to the package.", "Prepare the garlic separately.", "Combine with the noodles.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-corn",
        title: "Sweet Corn Indomie",
        description: "A colourful noodle dish with sweet corn and vegetables.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Vegetable",
        ingredients: ["1 pack of Indomie", "Sweet corn", "Carrots", "Onion"],
        steps: ["Prepare the vegetables.", "Cook the noodles according to the package.", "Prepare the sweet corn.", "Combine the ingredients.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-chef-special",
        title: "Chef Special Indomie",
        description: "A creative noodle dish with your favourite fresh ingredients.",
        time: "25 Minutes",
        difficulty: "Medium",
        category: "Special",
        ingredients: ["1 pack of Indomie", "Egg", "Carrots", "Sweet pepper", "Onion"],
        steps: ["Prepare all ingredients.", "Cook the noodles according to the package.", "Cook the egg completely.", "Combine the ingredients.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-noodle-salad",
        title: "Indomie Noodle Salad",
        description: "A refreshing noodle dish with crunchy vegetables.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Vegetable",
        ingredients: ["1 pack of Indomie", "Lettuce", "Carrots", "Cucumber"],
        steps: ["Prepare the vegetables.", "Cook the noodles according to the package.", "Allow the noodles to cool safely.", "Combine with the vegetables.", "Serve fresh."],
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: "indomie-rainbow",
        title: "Rainbow Indomie",
        description: "A colourful noodle dish packed with different vegetables.",
        time: "20 Minutes",
        difficulty: "Easy",
        category: "Vegetable",
        ingredients: ["1 pack of Indomie", "Red pepper", "Green pepper", "Carrots", "Sweet corn"],
        steps: ["Wash and prepare all vegetables.", "Cook the noodles according to the package.", "Prepare the vegetables.", "Mix everything together.", "Serve warm."],
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80"
    }
];

const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const recipe = recipes.find(item => item.id === recipeId);

const container = document.getElementById("recipe-content");

if (container) {
    if (recipe) {
        container.innerHTML = `
            <section class="px-6 py-16">
                <div class="max-w-7xl mx-auto">
                    <a href="../recipes.html" class="text-yellow-400 font-semibold hover:text-yellow-300">
                        ← Back to Recipes
                    </a>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
                        <img src="${recipe.image}" alt="${recipe.title}"
                            class="w-full h-[400px] object-cover rounded-2xl">

                        <div>
                            <p class="text-yellow-400 uppercase font-bold tracking-widest">
                                ${recipe.category} Recipe
                            </p>

                            <h1 class="text-4xl md:text-5xl font-extrabold text-white mt-4">
                                ${recipe.title}
                            </h1>

                            <p class="text-gray-400 leading-8 mt-6">
                                ${recipe.description}
                            </p>

                            <div class="grid grid-cols-2 gap-4 mt-8">
                                <div class="bg-[#151c2b] p-5 rounded-xl">
                                    <p class="text-gray-400 text-sm">Preparation Time</p>
                                    <h3 class="text-white font-bold text-xl mt-2">${recipe.time}</h3>
                                </div>

                                <div class="bg-[#151c2b] p-5 rounded-xl">
                                    <p class="text-gray-400 text-sm">Difficulty</p>
                                    <h3 class="text-white font-bold text-xl mt-2">${recipe.difficulty}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="px-6 py-12">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div class="bg-[#151c2b] p-8 rounded-2xl border border-gray-700">
                        <h2 class="text-3xl font-bold text-white mb-6">Ingredients</h2>
                        <ul class="text-gray-300 space-y-4">
                            ${recipe.ingredients.map(item => `<li>✓ ${item}</li>`).join("")}
                        </ul>
                    </div>

                    <div class="bg-[#151c2b] p-8 rounded-2xl border border-gray-700">
                        <h2 class="text-3xl font-bold text-white mb-6">Preparation Steps</h2>
                        <div class="space-y-5 text-gray-300">
                            ${recipe.steps.map((step, index) => `
                                <p><span class="text-yellow-400 font-bold">${String(index + 1).padStart(2, "0")}.</span> ${step}</p>
                            `).join("")}
                        </div>
                    </div>

                </div>
            </section>

            <section class="px-6 py-16">
                <div class="max-w-7xl mx-auto">
                    <h2 class="text-3xl font-bold text-white mb-8 text-center">Cooking Tips</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-[#151c2b] p-7 rounded-2xl border border-gray-700">
                            <div class="text-4xl mb-4">🍜</div>
                            <h3 class="text-white font-bold text-xl mb-3">Cook Carefully</h3>
                            <p class="text-gray-400">Follow the cooking instructions on the noodle package.</p>
                        </div>
                        <div class="bg-[#151c2b] p-7 rounded-2xl border border-gray-700">
                            <div class="text-4xl mb-4">🥕</div>
                            <h3 class="text-white font-bold text-xl mb-3">Fresh Ingredients</h3>
                            <p class="text-gray-400">Wash vegetables and prepare ingredients before cooking.</p>
                        </div>
                        <div class="bg-[#151c2b] p-7 rounded-2xl border border-gray-700">
                            <div class="text-4xl mb-4">✨</div>
                            <h3 class="text-white font-bold text-xl mb-3">Serve Fresh</h3>
                            <p class="text-gray-400">Enjoy your meal while it is freshly prepared.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    } else {
        container.innerHTML = `
            <section class="text-center px-6 py-32">
                <h1 class="text-4xl font-bold text-white">Recipe Not Found</h1>
                <p class="text-gray-400 mt-4">Please choose a recipe from our recipes page.</p>
                <a href="../recipes.html" class="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg mt-6">
                    Back to Recipes
                </a>
            </section>
        `;
    }
}
