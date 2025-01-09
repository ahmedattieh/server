// فتح وإغلاق السلة
const cart = document.querySelector('.cart');

function open_cart() {
    cart.classList.add('active');
}

function close_cart() {
    cart.classList.remove('active');
}

/* إدارة العناصر في السلة */
let all_products_json; // تخزين جميع المنتجات
let product_cart = []; // السلة
const items_in_cart = document.querySelector(".item_in_cart");

// إضافة منتج إلى السلة
function addToCart(id, btn) {
    // التحقق إذا كان المنتج موجودًا مسبقًا
    const existingProduct = product_cart.find(product => product.id === id);

    if (existingProduct) {
        // إذا كان المنتج موجودًا، قم بزيادة الكمية
        existingProduct.quantity += 1;
    } else {
        // إذا لم يكن موجودًا، أضفه إلى السلة
        const productToAdd = { ...all_products_json[id], quantity: 1 }; // نسخ بيانات المنتج وإضافة الكمية
        product_cart.push(productToAdd);
        btn.classList.add("active");
    }

    console.log(product_cart);
    updateCartUI();
}

// تحديث واجهة السلة
function updateCartUI() {
    let itemsHTML = "";

    product_cart.forEach((product, index) => {
        itemsHTML += `
            <div class="item_cart">
                <img src="${product.img}" alt="${product.name}">
                <div class="content">
                    <h4>${product.name}</h4>
                    <p class="price_cart">$${product.price}</p>
                    <p class="quantity">Quantity: ${product.quantity}</p>
                </div>
                <button onclick="remove_from_cart(${index})" class="delete_item">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    });

    items_in_cart.innerHTML = itemsHTML;
}

// إزالة منتج من السلة
function remove_from_cart(index) {
    product_cart.splice(index, 1); // حذف المنتج بناءً على الفهرس
    updateCartUI();
}
