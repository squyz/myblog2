export default {
    mounted(element, binding){
        function observeWidth(options){
            const callback = entries => {
                if(entries[0].isIntersecting){
                    binding.value(true, window.scrollY)
                }
                else{
                    binding.value(false, window.scrollY)
                }
            }
            const observer = new IntersectionObserver(callback, options);
            observer.observe(element)
        }

        if(window.innerWidth < 720){
            const options = {
                rootMargin: "0px",
                threshold: 0.3,
            };
            observeWidth(options)
        }

        else{
            const options = {
                rootMargin: "0px",
                threshold: 0.6,
            };
            observeWidth(options)
        }
    },
    name: 'scroll'
}