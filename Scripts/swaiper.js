import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const wrapperSlides = document.querySelector('.company-wrapper');

async function getJSONimg() {
	try {
		const res = await fetch("../json/client.json")
		const data = await res.json()
		console.log('okay');

		for (let i = 0; i < data.length; i++) {

			const sliderData = data[i]

			const newSliderDiv = document.createElement('div');
			newSliderDiv.classList.add('swiper-slide', 'company-slide');
			newSliderDiv.innerHTML = `
			<img src='${sliderData.img}' alt='${sliderData.alt}' />
	
	`;
			wrapperSlides.append(newSliderDiv);
		}

		const swiper = new Swiper('.swiper-company', {
			// Optional parameters
			direction: 'horizontal',
			loop: data.length >= 7,

			slidesPerView: 3,
			spaceBetween: 30,
			speed: 5000, // чим більше — тим повільніше, але плавніше
			allowTouchMove: false, // блокує вручну
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			},
			freeMode: false,
			freeModeMomentum: false,
			breakpoints: {
				375: {

					spaceBetween: 50,
				},
				540: {
					slidesPerView: 4,
					spaceBetween: 50,
				},
				600: {
					slidesPerView: 5,
					spaceBetween: 60,
				},

				768: {
					spaceBetween: 70,
					slidesPerView: 6,
				},
				1024: {
					slidesPerView: 7,
					spaceBetween: 90,
				}
			}
		});
	} catch (error) {
		console.error(error);
	}
}
getJSONimg()

const thumbsSlider = new Swiper('.product-slider-thumbs', {
	direction: 'vertical',
	slidesPerView: 3,
	spaceBetween: 10,
	watchOverflow: false,
	navigation: {
		nextEl: '.slider-thumbs-next',
		prevEl: '.slider-thumbs-prev',
	},
	breakpoints: {
		768: {
			direction: 'vertical'
		},
		0: {
			direction: 'horizontal'
		}
	}
});

const mainSlider = new Swiper('.product-slider-main', {
	direction: 'vertical',
	spaceBetween: 10,
	slidesPerView: 1,
	navigation: {
		nextEl: '.slider-thumbs-next',
		prevEl: '.slider-thumbs-prev',
	},
	thumbs: {
		swiper: thumbsSlider,
	},
	breakpoints: {
		1024: {
			direction: 'vertical'
		},
		0: {
			direction: 'horizontal',
			loop: 'true'
		}
	}
});







