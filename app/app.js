import '../assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';

function createComponent(){
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h1>Hello WebPack!</h1>';
}
createComponent();