// بيانات المنتجات التجريبية
const products = [
    {
        id: 1,
        name: "إيليت كلاسيك",
        brand: "ELITE",
        category: "Classic",
        price: 1200,
        image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        name: "رويال غولد",
        brand: "ELITE",
        category: "Luxury",
        price: 4500,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "سوبر سبورت",
        brand: "ELITE",
        category: "Sport",
        price: 850,
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "ماستر بيس",
        brand: "ELITE",
        category: "Luxury",
        price: 7200,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        name: "هيريتيج",
        brand: "ELITE",
        category: "Classic",
        price: 2100,
        image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        name: "دايفر إكس",
        brand: "ELITE",
        category: "Sport",
        price: 1550,
        image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=800"
    }
];

let cartCount = 0;
const grid = document.getElementById('product-grid');
const countBadge = document.getElementById('cart-count');

// وظيفة عرض المنتجات
function renderProducts(filter = 'All') {
    grid.innerHTML = '';
    const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);
    
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <p class="product-brand">${product.brand}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="add-btn" onclick="addToCart('${product.name}')">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="black" stroke-width="2" fill="none"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// وظيفة إضافة منتج للسلة
function addToCart(name) {
    cartCount++;
    countBadge.innerText = cartCount;
    
    // إشعار بسيط (Toast)
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: #D4AF37; color: #000; padding: 12px 24px; border-radius: 999px;
        font-weight: 700; font-size: 12px; z-index: 1000; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    `;
    toast.innerText = `تمت إضافة ${name} إلى السلة`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// منطق الفلترة (التصنيفات)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        renderProducts(e.target.dataset.filter);
    });
});

// العرض الأولي
renderProducts();

// تأثير شفافية شريط التنقل عند التمرير
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.9)';
    } else {
        nav.style.background = 'transparent';
    }
});
