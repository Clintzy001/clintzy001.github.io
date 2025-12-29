// ads-manager.js
const adsDatabase = {
    "index.html": {
        top: '<a href="ads.html"><img src="home_hero_ad.jpg" style="width:100%" loading="lazy"></a>',
        video: '<video autoplay muted loop playsinline><source src="home_promo.mp4"></video>'
    },
    "shop.html": {
        top: '<a href="ads.html"><img src="shop_discount_banner.jpg" style="width:100%" loading="lazy"></a>',
        video: '<video autoplay muted loop playsinline><source src="product_showcase.mp4"></video>'
    },
    "blog.html": {
        top: '<a href="ads.html"><img src="blog_newsletter_ad.jpg" style="width:100%" loading="lazy"></a>',
        video: '<video autoplay muted loop playsinline><source src="artist_interview.mp4"></video>'
    }
};

document.addEventListener("DOMContentLoaded", function() {
    // Get the current filename (e.g., "shop.html")
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Find the ads for this specific page
    const pageAds = adsDatabase[currentPage];

    if (pageAds) {
        // Inject the Image Ad into the top slot
        document.querySelectorAll('.inject-top-ad').forEach(el => {
            el.innerHTML = pageAds.top;
        });

        // Inject the Video Ad into the video slot
        document.querySelectorAll('.inject-video-ad').forEach(el => {
            el.innerHTML = pageAds.video;
        });
    }
});
