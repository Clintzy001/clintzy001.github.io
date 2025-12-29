// ads-manager.js
const adContent = {
    topBanner: {
        img: "images/promo_banner.jpg",
        link: "ads.html",
        alt: "Partner Advertisement"
    },
    sidebarAd: {
        video: "videos/partner_clip.mp4",
        link: "ads.html"
    }
};

function injectAds() {
    // 1. Inject Top Banners
    const topSlots = document.querySelectorAll('.inject-top-ad');
    topSlots.forEach(slot => {
        slot.innerHTML = `<a href="${adContent.topBanner.link}">
            <img src="${adContent.topBanner.img}" style="width:100%; border-radius:10px;" loading="lazy">
        </a>`;
    });

    // 2. Inject Video Ads
    const videoSlots = document.querySelectorAll('.inject-video-ad');
    videoSlots.forEach(slot => {
        slot.innerHTML = `<video autoplay muted loop playsinline style="width:100%; border-radius:12px;">
            <source src="${adContent.sidebarAd.video}" type="video/mp4">
        </video>`;
    });
}

// Run the function when the page loads
window.addEventListener('DOMContentLoaded', injectAds);
