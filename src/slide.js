class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide=${id}]`);
        this.activeSlide = false;
        this.init();
    }

    activateSlide(index) {
        this.activeSlide = index;
        this.items.forEach(item => item.classList.remove('active'));
        this.items[index].classList.add('active');

        this.thumbItems.forEach(item => item.classList.remove('active'));
        this.thumbItems[index].classList.add('active');

        this.autoSlide();
    }

    prev() {
        if(this.activeSlide > 0) {
            this.activateSlide(this.activeSlide - 1)
        } else {
            this.activateSlide(this.items.length - 1)
        }
    }

    next() {        
        if (this.activeSlide < this.items.length - 1) {
            this.activateSlide(this.activeSlide + 1);
        } else {
            this.activateSlide(0);
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        nextBtn.addEventListener('click', this.next);

        const prevBtn = this.slide.querySelector('.slide-prev');
        prevBtn.addEventListener('click', this.prev);
    }

    addThumbItems() {
        this.items.forEach(() => this.thumb.innerHTML += '<span></span>');
        this.thumbItems = Array.from(this.thumb.children);        
    }

    autoSlide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }

    init() {
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.thumb = this.slide.querySelector('.slide-thumb');

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        
        this.addThumbItems();
        this.addNavigation();
        this.activateSlide(0);

    }
   
}

new SlideStories('slide')