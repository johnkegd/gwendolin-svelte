import * as sapper from '@sapper/app';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import jQuery from 'jquery';
import Initiator from '../static/js/initiador.js';

sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
	Initiator(jQuery);
});
