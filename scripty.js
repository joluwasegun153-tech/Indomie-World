

// Newsletter Form
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for subscribing to Indomie World!");

    newsletterForm.reset();

});


    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function() {
        mobileMenu.classList.toggle("hidden");
    });
    function reserveTable() {
       alert('Thank you for ordering from us! Please contact us to confirm your order.')
    }
    
function viewRecipe() {
    alert('Thank you for ordering from us! Please contact us to confirm your order.');
}

    function showRecipe(number) {

        const recipes = [
            "Classic Indomie and Fried Egg\nPreparation Time: 10 Minutes\nIngredients: Indomie, egg, onions and seasoning.",

            "Indomie Vegetable Stir-Fry\nPreparation Time: 15 Minutes\nIngredients: Indomie, carrots, cabbage and onions.",

            "Indomie Chicken Delight\nPreparation Time: 20 Minutes\nIngredients: Indomie, chicken, carrots and onions.",

            "Spicy Indomie Special\nPreparation Time: 15 Minutes\nIngredients: Indomie, pepper, onions and seasoning."
        ];

        alert(recipes[number]);

    }

const recipes = [
    {
        title: "Classic Indomie and Fried Egg",
        ingredients: [
            "1 pack of Indomie noodles",
            "1 egg",
            "1 small onion",
            "Vegetable oil",
            "Indomie seasoning",
            "Carrots (optional)"
        ],
        steps: [
            "Boil water in a pot.",
            "Add the Indomie noodles and cook until soft.",
            "Add the seasoning and stir.",
            "Fry your egg separately.",
            "Serve the noodles with the fried egg."
        ]
    },

    {
        title: "Indomie Vegetable Stir-Fry",
        ingredients: [
            "1 pack of Indomie",
            "Carrots",
            "Cabbage",
            "Green pepper",
            "Onion",
            "Vegetable oil",
            "Indomie seasoning"
        ],
        steps: [
            "Cook the noodles according to the packet instructions.",
            "Wash and slice your vegetables.",
            "Heat a little oil in a pan.",
            "Add onions and vegetables.",
            "Add cooked noodles and seasoning.",
            "Stir everything together and serve."
        ]
    },

    {
        title: "Indomie Chicken Delight",
        ingredients: [
            "1 pack of Indomie",
            "Cooked chicken pieces",
            "Carrots",
            "Green pepper",
            "Onion",
            "Indomie seasoning"
        ],
        steps: [
            "Cook the chicken until fully done.",
            "Prepare the Indomie according to the packet instructions.",
            "Slice your vegetables.",
            "Add vegetables and cooked chicken to the noodles.",
            "Add seasoning and mix well.",
            "Serve while warm."
        ]
    },

    {
        title: "Spicy Indomie Special",
        ingredients: [
            "1 pack of Indomie",
            "Fresh pepper",
            "Onion",
            "Carrots",
            "Green pepper",
            "Indomie seasoning",
            "Vegetable oil"
        ],
        steps: [
            "Cook the noodles according to the packet instructions.",
            "Wash and slice the vegetables.",
            "Heat a little oil in a pan.",
            "Add onions, pepper and vegetables.",
            "Add cooked noodles and seasoning.",
            "Mix properly and serve."
        ]
    }
];

function showRecipe(number) {

    const recipe = recipes[number];

    document.getElementById("recipeTitle").textContent =
        recipe.title;

    document.getElementById("recipeIngredients").innerHTML =
        recipe.ingredients.map(item => `<li>${item}</li>`).join("");

    document.getElementById("recipeSteps").innerHTML =
        recipe.steps.map(step => `<li>${step}</li>`).join("");

    document.getElementById("recipeModal").classList.remove("hidden");
}

function closeRecipe() {
    document.getElementById("recipeModal").classList.add("hidden");
}

// Get the recipe popup
const modal = document.getElementById("recipe-modal");
const modalContent = document.getElementById("recipe-modal-content");
const closeButton = document.getElementById("close-recipe");

// Open the selected recipe
document.addEventListener("click", function(event) {

    const button = event.target.closest("[data-recipe]");

    if (!button) return;

    const recipeId = button.dataset.recipe;

    const recipe = recipes.find(function(item) {
        return item.id === recipeId;
    });

    if (!recipe || !modal || !modalContent) return;

    // Show recipe information
    modalContent.innerHTML = `

        <!-- Recipe Image and Heading -->
        <section class="relative h-[350px] md:h-[450px] bg-cover bg-center"
            style="background-image: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1)), url('${recipe.image}')">

            <div class="absolute bottom-8 left-6 md:left-10">
                <span class="bg-yellow-400 text-black px-5 py-2
                             rounded-full font-bold text-sm">
                    ${recipe.category.toUpperCase()}
                </span>

                <p class="text-yellow-400 font-bold mt-5 uppercase text-sm">
                    🔥 ${recipe.difficulty} Recipe
                </p>

                <h1 class="text-white text-3xl md:text-5xl font-extrabold mt-2">
                    ${recipe.title}
                </h1>

                <p class="text-gray-200 mt-3">
                    Preparation Time: ${recipe.time}
                </p>
            </div>
        </section>

        <!-- Ingredients and Preparation -->
        <section class="px-5 md:px-10 py-10">

            <div class="max-w-7xl mx-auto grid grid-cols-1
                        lg:grid-cols-2 gap-8">

                <!-- Ingredients -->
                <div class="bg-orange-50 p-6 md:p-8 rounded-2xl border border-orange-100">

                    <h2 class="text-2xl font-extrabold text-gray-900 mb-6">
                        Ingredients
                    </h2>

                    <p class="text-gray-500 text-sm mb-5">
                        Tick each ingredient as you prepare it.
                    </p>

                    <div class="space-y-5">
                        ${recipe.ingredients.map(function(item, index) {
                            return `
                                <label class="flex items-start gap-3 text-gray-700 cursor-pointer">
                                    <input type="checkbox"
                                        class="w-5 h-5 mt-1 accent-red-600"
                                        id="ingredient-${index}">
                                    <span>${item}</span>
                                </label>
                            `;
                        }).join("")}
                    </div>

                </div>

                <!-- Preparation Steps -->
                <div>

                    <h2 class="text-2xl font-extrabold text-gray-900 mb-6">
                        Preparation Steps
                    </h2>

                    <div class="space-y-5">
                        ${recipe.steps.map(function(step, index) {
                            return `
                                <label class="flex items-start gap-4
                                              bg-gray-50 p-5 rounded-2xl
                                              border border-gray-200 cursor-pointer">

                                    <input type="checkbox"
                                        class="w-5 h-5 mt-1 accent-red-600">

                                    <span class="flex gap-4">
                                        <span class="bg-red-600 text-white
                                                     w-8 h-8 rounded-full
                                                     flex items-center justify-center
                                                     shrink-0 font-bold">
                                            ${index + 1}
                                        </span>

                                        <span class="text-gray-700 leading-7">
                                            ${step}
                                        </span>
                                    </span>

                                </label>
                            `;
                        }).join("")}
                    </div>

                </div>

            </div>

        </section>

        <!-- Back Button -->
        <div class="text-center pb-12">
            <button onclick="document.getElementById('close-recipe').click()"
                class="bg-red-600 text-white font-bold px-8 py-3
                       rounded-full hover:bg-red-700 transition">
                Close Recipe
            </button>
        </div>

    `;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");

});

// Close the popup
function closeRecipeModal() {
    if (!modal) return;

    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
}

if (closeButton) {
    closeButton.addEventListener("click", closeRecipeModal);
}

// Close when clicking outside the recipe content
if (modal) {
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeRecipeModal();
        }
    });
}

// Close with Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeRecipeModal();
    }
});
