/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				base: 'var(--font-base)',
				heading: 'var(--font-heading)'
			},
			colors: {
				dominant: '#FFFFFF',
				complementary: '#EC623D',
				accent: '#2C4A87',
				'accent-secondary': '#5774AE',
				muted: '#F9FAFB',
				'muted-secondary': '#EFEFEF',
				inverted: '#0E0E0E',
				'inverted-secondary': '#86868B'
			},
			textColor: {
				skin: {
					base: '#212427',
					accent: '#2C4A87',
					inverted: '#ffffff',
					muted: '#7A7A7C',
					'muted-secondary': '#B4B4B7',
					nav: '#515155'
				}
			},
			screens: {
				'-2xl': { max: '1535px' },
				'-xl': { max: '1279px' },
				'-lg': { max: '1023px' },
				'-md': { max: '767px' },
				'-sm': { max: '639px' },
				'-xs': { max: '425px' },
				'-2xs': { max: '300px' },
				'@md': { min: '640px', max: '767px' },
				'@lg': { min: '768px', max: '1023px' },
				'@xl': { min: '1024px', max: '1279px' },
				'@2xl': { min: '1280px', max: '1535px' },
				mobile: { max: '1159px' },
				'-mobile': { min: '1160px' }
			},
			borderColor: {
				base: '#D8D8DA',
				inverted: '#2A2C2F'
			},
			animation: {
				fade: 'fade 250ms ease-in-out',
				'slide-right': 'slide-right 300ms ease-out'
			}
		}
	},

	plugins: []
};

module.exports = config;
