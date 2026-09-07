/* ==========================================================================
   HUKEAZ PRODUCTS v2 — Main JavaScript
   ========================================================================== */

let cart = JSON.parse(localStorage.getItem('hukeaz_cart') || '[]');

function formatTZS(amount) {
    return 'TZS ' + Number(amount).toLocaleString();
}

function saveCart() {
    localStorage.setItem('hukeaz_cart', JSON.stringify(cart));
}

function toggleMobileNav() {
    const nav = document.getElementById('mobile-nav');
    if (nav) nav.classList.toggle('active');
}

function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.add('active');
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.classList.remove('active');
}

// Currently selected service for booking (used by the form)
let selectedServiceForBooking = null;

function openBookingModal(serviceName = '') {
    selectedServiceForBooking = null;

    if (serviceName && typeof servicesData !== 'undefined') {
        selectedServiceForBooking = servicesData.find(
            s => s.name === serviceName || s.name.includes(serviceName)
        ) || null;
    }

    // Pre-select service in the form if possible
    const select = document.getElementById('book-service');
    if (select && selectedServiceForBooking) {
        for (let opt of select.options) {
            if (opt.value.includes(selectedServiceForBooking.name) || opt.text.includes(selectedServiceForBooking.name)) {
                opt.selected = true;
                break;
            }
        }
    }

    openModal('booking-modal');
}

/**
 * Booking form submit handler
 * FLOW: Fill form → Pay on Snipe first → After payment, WhatsApp gets booking details
 *
 * How it works:
 * 1. Save booking details in browser (sessionStorage)
 * 2. Redirect customer to Snipe payment page
 * 3. In Snipe, set Success/Redirect URL to: booking-success.html
 * 4. After payment, Snipe sends customer to booking-success.html
 * 5. That page automatically opens WhatsApp with the booking details
 */
function handleBookingFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const serviceName = (formData.get('service') || '').trim();
    const name = (formData.get('name') || '').trim();
    const phone = (formData.get('phone') || '').trim();
    const date = (formData.get('date') || '').trim();
    const time = (formData.get('time') || '').trim();
    const notes = (formData.get('notes') || '').trim();
    const beautician = (formData.get('beautician') || '').trim();
    const payment = (formData.get('payment') || '').trim();

    if (!serviceName || !name || !phone || !date || !time) {
        alert('Please fill in all required fields.');
        return;
    }

    // Find matching service for Snipe payment link
    let service = selectedServiceForBooking;
    if (!service && typeof servicesData !== 'undefined') {
        const shortName = serviceName.split(' (')[0].trim();
        service = servicesData.find(s =>
            s.name === shortName ||
            serviceName.includes(s.name) ||
            s.name.includes(shortName)
        ) || null;
    }

    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
        btn.disabled = true;
        btn.innerText = 'Redirecting to payment...';
    }

    // Save booking details — used AFTER payment on booking-success.html
    const bookingData = {
        service: serviceName,
        name: name,
        phone: phone,
        date: date,
        time: time,
        beautician: beautician || 'Any',
        payment: payment || 'N/A',
        notes: notes || 'None',
        savedAt: new Date().toISOString()
    };
    try {
        sessionStorage.setItem('hukeaz_pending_booking', JSON.stringify(bookingData));
        localStorage.setItem('hukeaz_pending_booking', JSON.stringify(bookingData));
    } catch (err) {
        console.warn('Could not save booking data', err);
    }

    // Must have a real Snipe link to continue
    if (service && service.buyLink && !service.buyLink.includes('YOUR-SNIPE-LINK-HERE')) {
        // Go to payment FIRST — WhatsApp opens only after payment (on success page)
        window.location.href = service.buyLink;
    } else {
        alert('Payment link for this service is not set yet. Please contact the salon on WhatsApp to complete your booking.');
        if (btn) {
            btn.disabled = false;
            btn.innerText = 'Proceed to Payment';
        }
    }
}

/* ========== IMAGE HELPER ==========
   Tries to load real image. If it fails, shows a nice placeholder.
===================================== */
function getProductImageHTML(product) {
    const src = `images/products/${product.image}`;
    return `
        <img src="${src}" 
             alt="${product.name}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
             loading="lazy">
        <div class="card-img-placeholder" style="display:none;">
            ${product.sku}<br><small style="opacity:0.6">Add photo</small>
        </div>
    `;
}

function getServiceImageHTML(service) {
    const src = `images/services/${service.image}`;
    return `
        <img src="${src}" 
             alt="${service.name}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
             loading="lazy">
        <div class="card-img-placeholder" style="display:none;">
            ${service.tag}<br><small style="opacity:0.6">Add photo</small>
        </div>
    `;
}

/* ========== CART ========== */
function addToCart(sku) {
    const product = productsCatalogue.find(p => p.sku === sku);
    if (product) {
        cart.push({ ...product });
        saveCart();
        updateCartUI();
        openModal('cart-modal');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = cart.length;

    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted);text-align:center;margin-top:2rem;">Your cart is currently empty.</p>`;
        ['cart-subtotal','cart-vat','cart-total'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerText = 'TZS 0';
        });
        return;
    }

    let subtotal = 0;
    container.innerHTML = cart.map((item, idx) => {
        subtotal += item.price;
        return `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.8rem;padding-bottom:0.8rem;border-bottom:1px solid var(--border-color);">
                <div style="display:flex;gap:0.8rem;align-items:center;">
                    <img src="images/products/${item.image}" alt="" 
                         style="width:48px;height:48px;object-fit:cover;border-radius:6px;background:#251F24;"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22><rect fill=%22%23251F24%22 width=%2248%22 height=%2248%22/></svg>'">
                    <div>
                        <div style="font-size:0.85rem;font-weight:600;">${item.name}</div>
                        <div style="font-size:0.7rem;color:var(--text-muted);">${item.sku}</div>
                    </div>
                </div>
                <div style="display:flex;align-items:center;gap:1rem;">
                    <span style="font-size:0.85rem;color:var(--gold-primary);font-weight:600;">${formatTZS(item.price)}</span>
                    <button style="background:none;border:none;color:var(--rose-gold);cursor:pointer;font-size:1rem;" onclick="removeFromCart(${idx})">✕</button>
                </div>
            </div>
        `;
    }).join('');

    // Prices already include 18% VAT
    const vatAmount = Math.round(subtotal * 0.18 / 1.18);
    const net = subtotal - vatAmount;

    const subEl = document.getElementById('cart-subtotal');
    const vatEl = document.getElementById('cart-vat');
    const totEl = document.getElementById('cart-total');
    if (subEl) subEl.innerText = formatTZS(net);
    if (vatEl) vatEl.innerText = formatTZS(vatAmount);
    if (totEl) totEl.innerText = formatTZS(subtotal);
}

/* ========== RENDER PRODUCTS ========== */
function renderProducts(products, containerId = 'products-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products.map(p => {
        // If product has a real Snipe payment link → show "Buy Now"
        // Otherwise show "Add to Cart"
        const hasRealLink = p.buyLink && !p.buyLink.includes('YOUR-SNIPE-LINK-HERE');

        const buttonHTML = hasRealLink
            ? `<a href="${p.buyLink}" target="_blank" rel="noopener" class="btn btn-gold btn-sm">Buy Now</a>`
            : `<button class="btn btn-outline btn-sm" onclick="addToCart('${p.sku}')">+ Add</button>`;

        return `
        <div class="card">
            <div class="card-img-wrap">
                <div class="card-tag">${(p.category || '').split(' ')[0]}</div>
                ${getProductImageHTML(p)}
            </div>
            <div class="card-body">
                <span style="font-size:0.65rem;color:var(--rose-gold);text-transform:uppercase;">${p.sub || ''}</span>
                <h3 class="card-title">${p.name}</h3>
                <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.8rem;flex-grow:1;">${p.description || ''}</p>
                <div class="card-price-row">
                    <div>
                        <div class="card-price">${formatTZS(p.price)}</div>
                    </div>
                    ${buttonHTML}
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function searchProducts() {
    const query = (document.getElementById('product-search')?.value || '').toLowerCase();
    const cat = document.getElementById('category-filter')?.value || 'all';
    let filtered = productsCatalogue;

    if (cat !== 'all') filtered = filtered.filter(p => p.category === cat);
    if (query) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.sku.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
    }
    renderProducts(filtered);
}

function filterProductsCategory() {
    searchProducts();
}

/* ========== RENDER SERVICES ========== */
function renderServices(services, containerId = 'services-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = services.map(s => `
        <div class="card">
            <div class="card-img-wrap">
                <div class="card-tag">${s.tag}</div>
                ${getServiceImageHTML(s)}
            </div>
            <div class="card-body">
                <h3 class="card-title">${s.name}</h3>
                <p class="card-meta">⏱ ${s.duration} • Master Specialist</p>
                <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:1rem;">${s.desc}</p>
                <div class="card-price-row">
                    <span class="card-price">${formatTZS(s.price)}</span>
                    <button class="btn btn-gold btn-sm" onclick="openBookingModal('${s.name}')">Book & Pay</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterServices(category) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');

    if (category === 'all') {
        renderServices(servicesData);
    } else {
        renderServices(servicesData.filter(s => s.category === category));
    }
}

/* ========== INVENTORY ========== */
function renderInventoryTable(products) {
    const tbody = document.getElementById('inventory-table-body');
    if (!tbody) return;

    tbody.innerHTML = products.map(p => {
        const isLow = p.stock <= p.minStock;
        return `
            <tr>
                <td style="font-weight:600;color:var(--gold-primary);">${p.sku}</td>
                <td>
                    <div style="display:flex;align-items:center;gap:0.6rem;">
                        <img src="images/products/${p.image}" alt="" 
                             style="width:36px;height:36px;object-fit:cover;border-radius:4px;background:#251F24;"
                             onerror="this.style.display='none'">
                        ${p.name}
                    </div>
                </td>
                <td>${p.category}</td>
                <td>${formatTZS(p.price)}</td>
                <td>${p.minStock}</td>
                <td style="font-weight:bold;color:${isLow ? '#e67e22' : '#2ecc71'};">${p.stock}</td>
                <td>${p.vat || '18%'}</td>
                <td>
                    <span class="status-pill ${isLow ? 'status-low' : 'status-in'}">
                        ${isLow ? 'Low Stock' : 'In Stock'}
                    </span>
                </td>
            </tr>
        `;
    }).join('');
}

/* ========== INIT ========== */
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    if (document.getElementById('services-container')) renderServices(servicesData);
    if (document.getElementById('products-container')) renderProducts(productsCatalogue);
    if (document.getElementById('inventory-table-body')) renderInventoryTable(productsCatalogue);

    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) closeModal(modal.id);
        });
    });
});