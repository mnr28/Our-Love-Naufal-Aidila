// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: false
    });

    // Loading Screen
    const loadingScreen = document.getElementById('loading-screen');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500);
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Home Section Button Click
    const homeBtn = document.querySelector('.home-section .btn-custom');
    const audio = new Audio('Sheila On 7 - Kita.mp3'); // Placeholder romantic music
    audio.loop = true;

    homeBtn.addEventListener('click', function() {
        // Play music
        audio.play().catch(e => console.log("Audio play failed:", e));
        
        // Scroll to about section
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Create floating hearts effect
        createFloatingHearts();
    });

    // Floating Hearts Animation
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        const colors = ['#4a6fa5', '#a8c0ff', '#cce7ff', '#1e3a8a'];
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.width = Math.random() * 20 + 10 + 'px';
                heart.style.height = heart.style.width;
                heart.style.animationDuration = Math.random() * 3 + 2 + 's';
                heart.style.opacity = Math.random() * 0.5 + 0.5;
                heartsContainer.appendChild(heart);
                
                // Remove heart after animation ends
                heart.addEventListener('animationend', () => {
                    heart.remove();
                });
            }, i * 100);
        }
    }

    // Gallery Section
const galleryGrid = document.getElementById('gallery-grid');

const galleryImages = [
    "images/photo_1_2026-02-15_10-15-42.jpg",
    "images/photo_2_2026-02-15_10-15-42.jpg",
    "images/photo_15_2026-02-12_07-59-45.jpg",
    "images/photo_2026-02-15_10-29-00.jpg",
    "images/photo_2026-02-15_10-33-36.jpg",
    "images/photo_2026-02-15_10-36-41.jpg",
    "images/photo_2026-02-15_12-17-28.jpg",
    "images/photo_2026-02-15_12-27-33.jpg",
    "images/photo_2026-02-15_12-35-39.jpg",
    "images/photo_2026-02-15_12-40-22 (2).jpg",
    "images/photo_2026-02-15_12-40-22.jpg",
    "images/photo_2026-02-15_12-40-23 (2).jpg",
    "images/photo_2026-02-15_12-40-23 (3).jpg",
    "images/photo_2026-02-15_12-40-23 (4).jpg",
    "images/photo_2026-02-15_12-40-23 (5).jpg",
    "images/photo_2026-02-15_12-40-23.jpg",
    "images/photo_2026-02-15_12-40-24 (2).jpg",
    "images/photo_2026-02-15_12-40-24 (3).jpg",
    "images/photo_2026-02-15_12-40-24.jpg",
    "images/photo_2026-02-15_12-40-25 (2).jpg",
    "images/photo_2026-02-15_12-40-25 (3).jpg",
    "images/photo_2026-02-15_12-40-25 (4).jpg",
    "images/photo_2026-02-15_12-40-25 (5).jpg",
    "images/photo_2026-02-15_12-40-25.jpg",
    "images/photo_2026-02-15_12-40-26.jpg",
    "images/photo_2026-02-15_12-40-27 (2).jpg",
    "images/photo_2026-02-15_12-40-27 (3).jpg",
    "images/photo_2026-02-15_12-40-27 (4).jpg",
    "images/photo_2026-02-15_12-40-27 (5).jpg",
    "images/photo_2026-02-15_12-40-27 (6).jpg",
    "images/photo_2026-02-15_12-40-27 (7).jpg",
    "images/photo_2026-02-15_12-40-27.jpg",
    "images/photo_2026-02-15_12-40-28 (2).jpg",
    "images/photo_2026-02-15_12-40-28.jpg",
    "images/photo_2026-02-15_12-40-29.jpg",
    "images/photo_2026-02-15_12-40-30 (2).jpg",
    "images/photo_2026-02-15_12-40-30.jpg",
    "images/photo_2026-02-15_12-40-31 (2).jpg",
    "images/photo_2026-02-15_12-40-31 (3).jpg",
    "images/photo_2026-02-15_12-40-31 (4).jpg",
    "images/photo_2026-02-15_12-40-31.jpg",
    "images/photo_2026-02-15_13-46-57.jpg",
    "images/photo_2026-02-15_13-47-28.jpg",
    "images/WhatsApp Image 2026-05-14 at 12.41.26.jpeg",
    "images/WhatsApp Image 2026-05-14 at 12.59.52.jpeg",
    "images/WhatsApp Image 2026-05-14 at 12.05.56.jpeg",
    "images/WhatsApp Image 2026-05-14 at 12.12.24.jpeg",
    "images/WhatsApp Image 2026-05-14 at 12.19.37.jpeg",
    "images/WhatsApp Image 2026-05-14 at 12.22.52.jpeg",
    "images/WhatsApp Image 2026-05-14 at 12.30.42.jpeg",
    "images/WhatsApp Image 2026-05-14 at 12.33.30.jpeg"
];

    galleryImages.forEach((src, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
            <img src="${src}" alt="Gallery Image ${index + 1}">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
        
        galleryItem.addEventListener('click', () => {
            openLightbox(src);
        });
    });

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    let currentImageIndex = 0;

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        currentImageIndex = galleryImages.indexOf(src);
    }

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightboxPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    });

    lightboxNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImageIndex];
    });

    // Close lightbox when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Music Section
    const musicPlaylist = document.getElementById('music-playlist');
    const musicTracks = [
        {
            img: 'images/about you.jpg',
            title: 'About You',
            artist: 'The 1975',
            src: 'music/The 1975 - About You (Official) (256).mp3'
        },
        {
            img: 'images/spontan.jpg',
            title: 'SPONTAN ( tanpa ) UHUY!',
            artist: 'DEABDIL',
            src: 'music/SPONTAN  tanpa  UHUY! – DEABDIL  Official Performance  _ Alah Alah ... Kok Bisa Ya.mp3'
        },
        {
            img: 'images/adaptasi.jpg',
            title: 'Adaptasi',
            artist: 'Tulus',
            src: 'music/TULUS - Adaptasi Official Lyric Video.mp3'
        }
    ];

    musicTracks.forEach(track => {
        const musicCard = document.createElement('div');
        musicCard.classList.add('music-card');
        musicCard.innerHTML = `
            <img src="${track.img}" alt="${track.title}">
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        `;
        musicCard.addEventListener('click', () => {
            loadTrack(track);
        });
        musicPlaylist.appendChild(musicCard);
    });

    // Audio Player
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressFill = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeSlider = document.getElementById('volume-slider');
    let currentTrackIndex = 0;
    let isPlaying = false;

    function loadTrack(track) {
        audio.src = track.src;
        document.getElementById('player-img').src = track.img;
        document.getElementById('song-title').textContent = track.title;
        document.getElementById('artist-name').textContent = track.artist;
        audio.play().then(() => {
            isPlaying = true;
            updatePlayPause();
        });
    }

    function updatePlayPause() {
        if (isPlaying) {
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playBtn.classList.add('play');
        } else {
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            playBtn.classList.remove('play');
        }
    }

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
        updatePlayPause();
    });

    prevBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + musicTracks.length) % musicTracks.length;
        loadTrack(musicTracks[currentTrackIndex]);
    });

    nextBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
        loadTrack(musicTracks[currentTrackIndex]);
    });

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = progress + '%';
        
        const currentMinutes = Math.floor(audio.currentTime / 60);
        const currentSeconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
        
        const durationMinutes = Math.floor(audio.duration / 60);
        const durationSeconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    });

    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
        volumeBtn.innerHTML = e.target.value == 0 
            ? '<i class="fas fa-volume-mute"></i>' 
            : '<i class="fas fa-volume-up"></i>';
    });

    volumeBtn.addEventListener('click', () => {
        if (audio.volume > 0) {
            audio.volume = 0;
            volumeSlider.value = 0;
            volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            audio.volume = 0.7;
            volumeSlider.value = 70;
            volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    });

    // Future Section
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const popup = document.getElementById('popup');

    yesBtn.addEventListener('click', () => {
        popup.classList.add('active');
        // Create confetti effect
        createConfetti();
    });

    noBtn.addEventListener('mouseenter', () => {
        // Move button randomly
        const randomX = Math.random() * 80 - 40; // -40 to 40
        const randomY = Math.random() * 80 - 40;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    // Close popup
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });

    // Confetti Effect
    function createConfetti() {
        const colors = ['#4a6fa5', '#a8c0ff', '#cce7ff', '#1e3a8a', '#ffffff'];
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                document.body.appendChild(confetti);
                
                // Animate confetti
                const animate = () => {
                    confetti.style.top = parseFloat(confetti.style.top) + Math.random() * 3 + 2 + 'px';
                    confetti.style.left = parseFloat(confetti.style.left) + (Math.random() - 0.5) * 2 + 'px';
                    
                    if (parseFloat(confetti.style.top) < window.innerHeight) {
                        requestAnimationFrame(animate);
                    } else {
                        confetti.remove();
                    }
                };
                requestAnimationFrame(animate);
            }, i * 50);
        }
    }

    // Counter for time together
    function updateCounter() {
        const startDate = new Date('2025-05-05T00:00:00'); // Tanggal Jadian: 5 Mei 2025
        const now = new Date();
        const diff = now - startDate; // milliseconds
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateCounter, 1000);
    updateCounter(); // Initial call

    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll Progress Bar
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        document.getElementById('progress-bar').style.width = scrolled + '%';
    });

    // Custom Cursor
    document.addEventListener('mousemove', (e) => {
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');
        cursorDot.style.left = e.pageX + 'px';
        cursorDot.style.top = e.pageY + 'px';
        cursorOutline.style.left = e.pageX + 'px';
        cursorOutline.style.top = e.pageY + 'px';
    });

    // Reduce cursor outline size on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .music-card, .btn-custom, .control-btn, .volume-btn, .social-icons a, #yes-btn, #no-btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.getElementById('cursor-outline').style.width = '30px';
            document.getElementById('cursor-outline').style.height = '30px';
        });
        el.addEventListener('mouseleave', () => {
            document.getElementById('cursor-outline').style.width = '20px';
            document.getElementById('cursor-outline').style.height = '20px';
        });
    });
});
