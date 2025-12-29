// ads-manager.js - The Brain of Clintzy Art's Ad System

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
    
    // Safety check for root domain (e.g., clintzyart.com/ should act like index.html)
    if (page === "" || page === "/") page = "index.html";

    // 2. Pull the correct ads for this specific page
    const pageAds = adsDatabase[page];

    if (pageAds) {
        // 3. Inject the Image/Banner Ads into all '.inject-top-ad' slots
        document.querySelectorAll('.inject-top-ad').forEach(div => {
            div.innerHTML = pageAds.top;
        });

        // 4. Inject the Video Ads into all '.inject-video-ad' slots
        document.querySelectorAll('.inject-video-ad').forEach(div => {
            div.innerHTML = pageAds.video;
        });
    } else {
        console.warn("No ads configured for page:", page);
    }
});
