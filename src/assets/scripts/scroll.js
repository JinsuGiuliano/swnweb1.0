const mainScript = (callback) => {
    const script = document.createElement('script');
    script.src = '../js/script.js';
    document.body.appendChild(script);
    script.onload = () => { 
      if (callback) callback();
    };
}; 
const preloader = document.createElement('div');
preloader.id = 'preloader';

const scrollScript =  () => {
     mainScript()
     //document.body.appendChild(preloader);
} 
export default scrollScript;