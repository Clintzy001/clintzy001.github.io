// ads-manager.js - Hybrid Ad System (Local + Google Ad Manager)

const adsDatabase = {
    "index.html": {
        top: '<a href="ads.html"><img src="images/ads/home-banner.jpg" style="width:100%; border-radius:10px;" alt="Home Ad" loading="lazy"></a>',
        video: '<video autoplay muted loop playsinline style="width:100%; border-radius:12px;"><source src="videos/home-ad.mp4" type="video/mp4"></video>'
    },
    "shop.html": {
        top: '<a href="ads.html"><img src="images/ads/shop-banner.jpg" style="width:100%; border-radius:10px;" alt="Shop Ad" loading="lazy"></a>',
        video: '<video autoplay muted loop playsinline style="width:100%; border-radius:12px;"><source src="videos/shop-ad.mp4" type="video/mp4"></video>'
    },
    "blog.html": {
        top: '<a href="ads.html"><img src="images/ads/blog-banner.jpg" style="width:100%; border-radius:10px;" alt="Blog Ad" loading="lazy"></a>',
        video: '<video autoplay muted loop playsinline style="width:100%; border-radius:12px;"><source src="videos/blog-ad.mp4" type="video/mp4"></video>'
    },
    "contact.html": {
        top: '<a href="ads.html"><img src="images/ads/contact-banner.jpg" style="width:100%; border-radius:10px;" alt="Contact Ad" loading="lazy"></a>',
        video: '<video autoplay muted loop playsinline style="width:100%; border-radius:12px;"><source src="videos/contact-ad.mp4" type="video/mp4"></video>'
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // 1. Identify which page the user is currently on
    const path = window.location.pathname;
    let page = path.split("/").pop() || "index.html";
    if (page === "" || page === "/") page = "index.html";

    // 2. Local Ad Injection Logic
    const pageAds = adsDatabase[page];

    if (pageAds) {
        // Inject Banner Ads
        document.querySelectorAll('.inject-top-ad').forEach(div => {
            // Assign Google ID for professional tracking
            div.id = 'div-gpt-ad-top';
            div.innerHTML = pageAds.top;
            
            // Trigger Google Ad Manager display if script is present
            if (typeof googletag !== 'undefined') {
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-top'); });
            }
        });

        // Inject Video Ads
        document.querySelectorAll('.inject-video-ad').forEach(div => {
            // Assign Google ID for professional tracking
            div.id = 'div-gpt-ad-video';
            div.innerHTML = pageAds.video;

            // Trigger Google Ad Manager display if script is present
            if (typeof googletag !== 'undefined') {
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-video'); });
            }
        });
    } else {
        console.warn("No ads configured for page:", page);
    }
});
