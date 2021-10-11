import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress"
import { Router, useRouter } from 'next/router';

const progress = new ProgressBar({
  size: 4,
  color: '#FD5861',
  className: 'z-50',
  delay: 100
});
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish)
function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />

}

export default MyApp
// pk.eyJ1IjoibXVpenpraGFuIiwiYSI6ImNrdWhib3h2aDJjamIzMG1hazRvbjg2ZWMifQ._H0XZwqkQU1ZkH7rrcELWA
// https://api.mapbox.com/styles/v1/muizzkhan/ckuhbz1b03zhi17pm5dg428hn.html?title=view&access_token=pk.eyJ1IjoibXVpenpraGFuIiwiYSI6ImNrdWhib3h2aDJjamIzMG1hazRvbjg2ZWMifQ._H0XZwqkQU1ZkH7rrcELWA&zoomwheel=true&fresh=true#9/40.72/-73.97
// <iframe width='100%' height='400px' src="https://api.mapbox.com/styles/v1/muizzkhan/ckuhbz1b03zhi17pm5dg428hn.html?title=false&access_token=pk.eyJ1IjoibXVpenpraGFuIiwiYSI6ImNrdWhib3h2aDJjamIzMG1hazRvbjg2ZWMifQ._H0XZwqkQU1ZkH7rrcELWA&zoomwheel=false#9/40.72/-73.97" title="Navigation" style="border:none;"></iframe>