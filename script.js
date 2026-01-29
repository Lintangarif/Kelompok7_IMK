/* =========================================
   1. DATA DUMMY (DATABASE PROMPT)
   ========================================= */
const galleryData = [
    // --- GAMBAR (IMAGES) ---
    { 
        id: 2, 
        title: "Realistic Portrait LoRA", 
        category: "local", 
        model: "Stable Diffusion XL", 
        type: "image", 
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", 
        prompt: "Photo of a young woman, natural skin texture, soft lighting, shot on 35mm lens, f/1.8, bokeh background, hyperrealistic",
        specs: { vram: "8GB", ram: "16GB", gpu: "RTX 3060+" },
        detailSpecs: {
            min: { gpu: "RTX 3060 (12GB)", ram: "16 GB DDR4", hdd: "512 GB SSD" },
            rec: { gpu: "RTX 4070 (24GB)", ram: "32 GB DDR5", hdd: "1 TB NVMe" }
        },
        link: "https://seaart.ai/models/detail/sdxl-base-1-0"
    },
    { 
        id: 3, 
        title: "Space Exploration", 
        category: "cloud", 
        model: "DALL-E 3", 
        type: "image", 
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", 
        prompt: "Astronaut floating in deep space, nebula background, digital art, vibrant colors, sci-fi concept",
        specs: { vram: "N/A (Cloud)", ram: "Free", gpu: "Browser Only" },
        link: "https://www.bing.com/images/create"
    },
    { 
        id: 4, 
        title: "Fantasy Landscape", 
        category: "local", 
        model: "ComfyUI + SD 1.5", 
        type: "image", 
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto-format&fit=crop", 
        prompt: "Epic fantasy landscape, floating islands, waterfalls, magical atmosphere, matte painting style, artstation trends",
        specs: { vram: "6GB", ram: "16GB", gpu: "GTX 1660+" },
        detailSpecs: {
            min: { gpu: "GTX 1660 (6GB)", ram: "8 GB DDR4", hdd: "20 GB SSD" },
            rec: { gpu: "RTX 3060 (12GB)", ram: "16 GB DDR4", hdd: "50 GB SSD" }
        },
        link: "https://github.com/comfyanonymous/ComfyUI"
    },
    { 
        id: 5, 
        title: "Cyberpunk City", 
        category: "cloud", 
        model: "Midjourney v5", 
        type: "image", 
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto-format&fit=crop", 
        prompt: "Futuristic city skyline at night, flying cars, neon signs, rainy streets, blade runner vibe",
        specs: { vram: "N/A (Cloud)", ram: "Free", gpu: "Browser Only" },
        link: "https://www.midjourney.com"
    },
    { 
        id: 6, 
        title: "Anime Style ControlNet", 
        category: "local", 
        model: "SDXL + ControlNet", 
        type: "image", 
        image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1000&auto-format&fit=crop", 
        prompt: "Anime style illustration, girl running with toast in mouth, school uniform, morning sunlight, makoto shinkai style",
        specs: { vram: "8GB", ram: "16GB", gpu: "RTX 3060+" },
        detailSpecs: {
            min: { gpu: "RTX 2060 (6GB)", ram: "16 GB DDR4", hdd: "40 GB SSD" },
            rec: { gpu: "RTX 3060 (12GB)", ram: "32 GB DDR4", hdd: "100 GB SSD" }
        },
        link: "https://github.com/lllyasviel/ControlNet"
    },

    // --- VIDEO (FILE LOKAL) ---
    { 
        id: 7, 
        title: "Ocean Drone Shot", 
        category: "cloud", 
        model: "Sora", 
        type: "video", 
        videoUrl: "vidio1.mp4", 
        prompt: "Aerial drone shot of crashing waves on a rocky cliff, sunset lighting, 4k resolution, smooth motion",
        specs: { vram: "N/A (Cloud)", ram: "Free", gpu: "Browser Only" },
        link: "https://openai.com/sora"
    },
    { 
        id: 8, 
        title: "Abstract Fluid Art", 
        category: "cloud", 
        model: "Runway Gen-2", 
        type: "video", 
        videoUrl: "vidio2.mp4", 
        prompt: "Liquid colors swirling and mixing, ink in water, slow motion, macro shot, vibrant colors, abstract art",
        specs: { vram: "N/A (Cloud)", ram: "Free", gpu: "Browser Only" },
        link: "https://runwayml.com"
    },
    { 
        id: 9, 
        title: "Timelapse City", 
        category: "cloud", 
        model: "Pika Labs", 
        type: "video", 
        videoUrl: "vidio3.mp4", 
        prompt: "Timelapse of city traffic at night, light trails, busy street, hyperlapse style",
        specs: { vram: "N/A (Cloud)", ram: "Free", gpu: "Browser Only" },
        link: "https://pika.art"
    },
    { 
        id: 10, 
        title: "Forest Morning", 
        category: "local", 
        model: "AnimateDiff", 
        type: "video", 
        videoUrl: "vidio4.mp4", 
        prompt: "Peaceful morning in a forest, sunbeams through trees, slight wind moving leaves, cinematic 4k",
        specs: { vram: "8GB", ram: "16GB", gpu: "RTX 3060+" },
        detailSpecs: {
            min: { gpu: "RTX 3060 (12GB)", ram: "16 GB DDR4", hdd: "60 GB SSD" },
            rec: { gpu: "RTX 4070 (12GB)", ram: "32 GB DDR5", hdd: "200 GB SSD" }
        },
        link: "https://github.com/guoyww/AnimateDiff"
    }
];

/* =========================================
   2. VARIABEL GLOBAL & INIT
   ========================================= */
let currentData = [...galleryData]; 
let currentIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favPrompts')) || [];
let isDarkMode = localStorage.getItem('theme') !== 'light';

window.onload = () => { 
    applyTheme(); 
    showPage('home'); 
    animateStats(); 
    renderGallery(galleryData); 
};

/* =========================================
   3. SCROLL TO TOP
   ========================================= */
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

/* =========================================
   4. THEME TOGGLE
   ========================================= */
function toggleTheme() { 
    isDarkMode = !isDarkMode; 
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); 
    applyTheme(); 
}

function applyTheme() {
    const icon = document.getElementById('themeIcon');
    if(isDarkMode) { 
        document.body.classList.remove('light-mode'); 
        icon.className = 'fas fa-moon'; 
    } else { 
        document.body.classList.add('light-mode'); 
        icon.className = 'fas fa-sun'; 
    }
}

/* =========================================
   5. NAVIGATION
   ========================================= */
function showPage(pageId) {
    window.scrollTo({top:0, behavior:'smooth'});
    
    document.querySelectorAll('.main-page-content').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    
    document.querySelectorAll('.page-nav-btn, .icon-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`button[onclick="showPage('${pageId}')"]`);
    if(btn) btn.classList.add('active');
    
    if(pageId==='home') resetFilter();
}

/* =========================================
   6. OPTIMISASI VIDEO (LAZY PLAY - ANTI LAG)
   ========================================= */
function initVideoObserver() {
    // Fitur ini membuat video HANYA play saat terlihat di layar
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Jika video masuk ke layar (Visible) -> PLAY
                if (entry.isIntersecting) {
                    // Try catch untuk menghindari error jika user belum interaksi
                    let playPromise = entry.target.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            // Auto-play was prevented
                        });
                    }
                } else {
                    // Jika video keluar layar (Hidden) -> PAUSE (Hemat Memory)
                    entry.target.pause(); 
                }
            });
        }, { threshold: 0.5 }); // Video play jika 50% terlihat

        // Pasang observer ke semua video di galeri
        document.querySelectorAll('video.lazy-video').forEach(video => {
            videoObserver.observe(video);
        });
    }
}

/* =========================================
   7. GALLERY & CARD RENDERING
   ========================================= */
function scrollGallery(id, val) {
    document.getElementById(id).scrollBy({ left: val, behavior: 'smooth' });
}

function renderGallery(data) {
    const imageGrid = document.getElementById('imageGrid');
    const videoGrid = document.getElementById('videoGrid');
    
    imageGrid.innerHTML = ''; 
    videoGrid.innerHTML = '';
    
    const images = data.filter(i => i.type === 'image');
    const videos = data.filter(i => i.type === 'video');
    
    if(images.length > 0) {
        document.getElementById('imageSectionContainer').style.display='block';
        images.forEach(item => imageGrid.appendChild(createCard(item)));
    } else {
        document.getElementById('imageSectionContainer').style.display='none';
    }

    if(videos.length > 0) {
        document.getElementById('videoSectionContainer').style.display='block';
        videos.forEach(item => videoGrid.appendChild(createCard(item)));
    } else {
        document.getElementById('videoSectionContainer').style.display='none';
    }

    if(images.length===0 && videos.length===0) {
        document.getElementById('emptyState').style.display='block';
    } else {
        document.getElementById('emptyState').style.display='none';
    }

    // --- JALANKAN OBSERVER SETELAH RENDER ---
    setTimeout(() => {
        initVideoObserver();
    }, 500); // Delay sedikit agar elemen siap
}

function createCard(item) {
    const badgeClass = item.category==='cloud'?'badge-cloud':'badge-local';
    const badgeText = item.category==='cloud'?'CLOUD':'LOCAL';
    const isFav = favorites.includes(item.id);
    const favClass = isFav ? 'active' : '';
    
    let mediaContent = '';
    
    if (item.type === 'video') {
        // PERUBAHAN PENTING (ANTI LAG):
        // 1. Hapus 'autoplay' (biar tidak langsung jalan semua)
        // 2. Tambah class 'lazy-video' (biar dideteksi script observer)
        // 3. Tambah preload='none' (hemat data)
        mediaContent = `
            <video class="gallery-img lazy-video" muted loop playsinline preload="metadata">
                <source src="${item.videoUrl}" type="video/mp4">
            </video>
        `;
    } else {
        mediaContent = `<img src="${item.image}" class="gallery-img" loading="lazy" alt="${item.title}">`;
    }
    
    const div = document.createElement('div'); 
    div.className = 'gallery-item';
    
    div.innerHTML = `
        ${mediaContent}
        <div class="badge-model" style="background:var(--accent-${item.category==='cloud'?'cloud':'offline'})">${badgeText}</div>
        <button class="btn-fav ${favClass}" onclick="toggleFavorite(event, ${item.id})">
            <i class="fas fa-heart"></i>
        </button>
        <div class="item-content">
            <div class="item-title">${item.title}</div>
            <div class="item-preview">${item.prompt}</div>
            <div class="item-model"><i class="fas fa-bolt"></i> ${item.model}</div>
        </div>
    `;
    
    div.onclick = (e) => { 
        if(!e.target.closest('.btn-fav')) openModal(item); 
    };
    
    return div;
}

/* =========================================
   8. FILTER & SEARCH
   ========================================= */
function filterByModel(cat, el) {
    document.querySelectorAll('.model-card').forEach(c=>c.classList.remove('active')); 
    if(el) el.classList.add('active');
    currentData = galleryData.filter(i=>i.category===cat); 
    renderGallery(currentData);
}

function resetFilter() {
    document.querySelectorAll('.model-card').forEach(c=>c.classList.remove('active')); 
    document.getElementById('searchInput').value='';
    currentData=[...galleryData]; 
    renderGallery(currentData);
}

function showOnlyFavorites() {
    currentData = galleryData.filter(i => favorites.includes(i.id)); 
    renderGallery(currentData);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const t = e.target.value.toLowerCase();
    currentData = galleryData.filter(i => i.title.toLowerCase().includes(t) || i.prompt.toLowerCase().includes(t));
    renderGallery(currentData);
});

/* =========================================
   9. FAVORITES
   ========================================= */
function toggleFavorite(e, id) {
    e.stopPropagation();
    if(favorites.includes(id)) {
        favorites = favorites.filter(fid=>fid!==id); 
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favPrompts', JSON.stringify(favorites));
    document.getElementById('statFavorites').innerText = favorites.length;
    const btn = e.currentTarget; 
    btn.classList.toggle('active');
}

/* =========================================
   10. MODAL POPUP
   ========================================= */
const modal = document.getElementById('detailModal');

function openModal(item) {
    currentIndex = currentData.indexOf(item); 
    updateModal(item); 
    modal.classList.add('active'); 
    document.addEventListener('keydown', handleKey);
}

function updateModal(item) {
    document.getElementById('modalTitle').innerText = item.title;
    document.getElementById('modalPrompt').innerText = item.prompt;
    document.getElementById('modalModelDetail').innerHTML = `<i class="fas fa-layer-group"></i> Model: <strong>${item.model}</strong>`;

    const specDetails = document.getElementById('specDetails');
    if (item.specs) {
        specDetails.innerHTML = `
            <span><i class="fas fa-memory"></i> ${item.specs.vram} VRAM</span>
            <span><i class="fas fa-hdd"></i> ${item.specs.ram} RAM</span>
            <span><i class="fas fa-microchip"></i> ${item.specs.gpu}</span>
        `;
    } else {
        specDetails.innerHTML = '';
    }

    const dynamicBtn = document.getElementById('modalDynamicBtn');
    const dynamicText = document.getElementById('dynamicText');
    const dynamicIcon = document.getElementById('dynamicIcon');
    const badge = document.getElementById('modalBadge');
    if (item.category === 'cloud') {
        badge.innerText = 'PUBLIC CLOUD AI';
        badge.style.background = 'var(--accent-cloud)';
        badge.style.color = '#ffffff';

        dynamicBtn.style.background = '#6366f1';
        dynamicBtn.style.color = 'white';
        dynamicBtn.href = item.link || '#';
        dynamicBtn.onclick = null;
        dynamicText.innerText = 'Jalankan di Web';
        dynamicIcon.className = 'fas fa-external-link-alt';
    } else {
        badge.innerText = 'OFFLINE / LOCAL AI';
        badge.style.background = 'var(--accent-offline)';
        badge.style.color = '#000000';

        dynamicBtn.style.background = 'var(--accent-offline)';
        dynamicBtn.style.color = 'black';
        dynamicBtn.href = 'javascript:void(0)';
        dynamicBtn.onclick = (e) => {
            e.preventDefault();
            openSysReqModal(item);
        };
        dynamicText.innerText = 'Spesifikasi';
        dynamicIcon.className = 'fas fa-microchip';
    }

    const container = document.getElementById('mediaContainer');
    if (item.type === 'video') {
        // Kontrol lengkap untuk modal popup
        container.innerHTML = `<video src="${item.videoUrl}" controls autoplay loop style="max-width:100%; max-height:100%;"></video>`;
    } else {
        container.innerHTML = `<img src="${item.image}" style="max-width:100%; max-height:100%; object-fit:contain;">`;
    }
}

function changeImage(dir) {
    currentIndex += dir; 
    if(currentIndex < 0) currentIndex = currentData.length-1; 
    if(currentIndex >= currentData.length) currentIndex = 0;
    updateModal(currentData[currentIndex]);
}

function handleKey(e) { 
    if(e.key==='ArrowLeft') changeImage(-1); 
    if(e.key==='ArrowRight') changeImage(1); 
    if(e.key==='Escape') closeModal(); 
}

function closeModal() { 
    modal.classList.remove('active'); 
    document.removeEventListener('keydown', handleKey); 
    document.getElementById('mediaContainer').innerHTML=''; 
}

/* =========================================
   11. MODAL SPEK PC
   ========================================= */
const sysReq = document.getElementById('sysReqModal');
function openSysReqModal(item) {
    if (!item || !item.detailSpecs) return;

    document.getElementById('sysReqTitle').innerHTML = `<i class="fas fa-desktop" style="color:var(--secondary)"></i> Spesifikasi ${item.model}`;
    document.getElementById('sysReqSubtitle').innerText = `Kebutuhan sistem untuk menjalankan ${item.model}:`;

    const minList = document.getElementById('minSpecList');
    minList.innerHTML = `
        <li><strong>GPU:</strong> ${item.detailSpecs.min.gpu}</li>
        <li><strong>RAM:</strong> ${item.detailSpecs.min.ram}</li>
        <li><strong>HDD:</strong> ${item.detailSpecs.min.hdd}</li>
    `;

    const recList = document.getElementById('recSpecList');
    recList.innerHTML = `
        <li><strong>GPU:</strong> ${item.detailSpecs.rec.gpu}</li>
        <li><strong>RAM:</strong> ${item.detailSpecs.rec.ram}</li>
        <li><strong>HDD:</strong> ${item.detailSpecs.rec.hdd}</li>
    `;

    sysReq.classList.add('active');
}
function closeSysReqModal() { sysReq.classList.remove('active'); }

window.onclick = (e) => { 
    if(e.target===modal) closeModal(); 
    if(e.target===sysReq) closeSysReqModal(); 
}

/* =========================================
   12. ANIMASI STATS
   ========================================= */
function animateStats() {
    document.querySelectorAll('.stat-number').forEach(el => {
        if(el.id === 'statFavorites') {
            el.innerText = favorites.length;
            return;
        }
        const target = +el.getAttribute('data-target');
        let current = 0;
        const increment = Math.ceil(target / 50);
        const timer = setInterval(() => {
            current += increment;
            if(current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.innerText = current;
        }, 30);
    });
}

/* =========================================
   13. UTILS
   ========================================= */
function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toastMessage').innerText = msg;
    t.classList.add('show'); 
    setTimeout(()=>t.classList.remove('show'), 3000);
}
function copyPrompt() { navigator.clipboard.writeText(document.getElementById('modalPrompt').innerText); showToast('Disalin!'); }
function simulateDownload() { showToast('Mengunduh...'); }
function handleContactSubmit(e) { e.preventDefault(); showToast('Pesan Terkirim!'); e.target.reset(); }
function handleReviewSubmit(e) { e.preventDefault(); showToast('Review Terkirim!'); e.target.reset(); }
function handleFeedbackSubmit(e) { e.preventDefault(); showToast('Masukan diterima!'); e.target.reset(); }
